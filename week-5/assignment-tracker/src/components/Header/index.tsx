import React from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import AssignmentInterface from "../interfaces.tsx";
import AssignmentsProps from "../interfaces.tsx";

export function Header(props: AssignmentsProps) {
    const [createDisabled, setCreateDisabled] = React.useState(true);
    return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input id="new" placeholder="Add a new assignment" type="text" onChange={e => {e.target.value.length >0 ? setCreateDisabled(false) : setCreateDisabled(true)} }/>
        <button disabled={createDisabled} onClick={e=>{
            //ENSURE FORM IS NOT SUBMITTED
            e.preventDefault();
            //GET TEXT OF NEW ASSIGNMENT AND AN ID
            const newAssignmentField = document.getElementById('new');
            const newAssignmentName: string = newAssignmentField.value ?? "";
            let newId = 1;
            let updatedAssignments = [];
            if (props.currentAssignments.length>0) {
                newId = (props.currentAssignments.reduce((prev: AssignmentInterface, current: AssignmentInterface)=>(prev.id > current.id ? prev : current))).id +1;
                updatedAssignments = [...props.currentAssignments, {id: newId, name: newAssignmentName, status:0}];
            }
            else {
                updatedAssignments = [{id: newId, name: newAssignmentName, status:0}];
            }

            props.setCurrentAssignments(updatedAssignments);
            localStorage.setItem("currentAssignments", JSON.stringify(updatedAssignments));
            //CLEAR THE FIELD
            newAssignmentField.value='';
            setCreateDisabled(true);
        }}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}