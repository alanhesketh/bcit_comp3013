import React, {useState} from "react";

import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { AssignmentInterface } from "../../interfaces/AssignmentPropsInterface.ts";
import { AssignmentsProps } from "../../interfaces/AssignmentPropsInterface.ts";

import 'react-day-picker/dist/style.css';
import DatePickerDialog from "../DatePickerPopup";
import {format} from "date-fns";

export function Header(props: AssignmentsProps) {

    const [newAssignment, setNewAssignment] = React.useState('');
    const [createDisabled, setCreateDisabled] = React.useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDateText, setSelectedDateText] = useState('');

    const handleCreateDisabled = (type) => {
        if (newAssignment!=='' && type==='time' || (selectedDate!==null && newAssignment!=='')) {
            setCreateDisabled(false);
        }
        else
        {
            setCreateDisabled(true)
        }
    }

    const handleDaySelect = (date: Date) => {
        setSelectedDate(date);
        setSelectedDateText(format(date, 'y-MM-d'));
        handleCreateDisabled('time');
    };



    return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>

          <input id="new" placeholder="Add a new assignment" value={newAssignment} onChange={e => {setNewAssignment(e.target.value); handleCreateDisabled('text');}}/>

          <DatePickerDialog selectedDate={selectedDate} selectedDateText={selectedDateText} updateDate={handleDaySelect}/>

          <button disabled={createDisabled} onClick={e=>{
            //ENSURE FORM IS NOT SUBMITTED
            e.preventDefault();
            //GET TEXT OF NEW ASSIGNMENT AND AN ID

            let newId = 1;
            let updatedAssignments: AssignmentInterface[] ;
            if (props.currentAssignments.length>0) {
                newId = (props.currentAssignments.reduce((prev: AssignmentInterface, current: AssignmentInterface)=>(prev.id > current.id ? prev : current))).id +1;
                updatedAssignments = [...props.currentAssignments, {id: newId, name: newAssignment, duedate: selectedDate, status:0}];
            }
            else {
                updatedAssignments = [{id: newId, name: newAssignment, duedate: selectedDate, status:0}];
            }

            props.setCurrentAssignments(updatedAssignments);
            localStorage.setItem("currentAssignments", JSON.stringify(updatedAssignments));
            //CLEAR THE FIELD
            setNewAssignment('');
            setSelectedDate(null);
            setSelectedDateText('');
            setCreateDisabled(true);
        }}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}