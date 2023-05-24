import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AssignmentProps from "../../interfaces/AssignmentPropsInterface";
import AssignmentInterface from '../../interfaces/AssingmentInterface';
import Chip from '@mui/material/Chip';
import { datedifference } from "../../helpers/datedifference";

export function Assignment(props: AssignmentProps) {

    const classNamesListText = [];
    const classNamesListButton = [styles.checkContainer];
    const daysToDue: number = datedifference(props.displayAssignment.duedate);
    let dueChipStyle = 'primary';
    let dueChipLabel = 'due today';


    if (props.displayAssignment.status === 1) {
        classNamesListText.push(styles.textCompleted);
        classNamesListButton.push(styles.checkChecked);
    }
    else {
        classNamesListText.push(styles.label);
        classNamesListButton.push(styles.checkUnchecked);
        daysToDue < 2 ? dueChipStyle = 'error' : dueChipStyle = 'primary';
        daysToDue > 1 ? dueChipLabel = 'due in ' + daysToDue + ' days'
            : daysToDue === 1 ? dueChipLabel = 'due tomorrow'
                : daysToDue===0 ? dueChipLabel = 'due today'
                    : daysToDue === -1 ? dueChipLabel = 'due yesterday'
                        : dueChipLabel = 'due ' + Math.abs(daysToDue) + ' days ago';
    }


    return (
    <div className={styles.assignment}>
      <button className={classNamesListButton.join(" ")} onClick={()=>{
          let newStatus: number;
          props.displayAssignment.status === 1 ? newStatus = 0 : newStatus = 1;
          const updatedAssignments = props.currentAssignments.map((assignment: AssignmentInterface) => {
              if (assignment.id === props.displayAssignment.id) {
                  return {
                      ...assignment,
                      status: newStatus,
                  };
              } else {
                  return assignment;
              }
          });

          props.setCurrentAssignments(updatedAssignments);
          localStorage.setItem("currentAssignments", JSON.stringify(updatedAssignments));
      }}>
          <div>{props.displayAssignment.status===1 ? <BsFillCheckCircleFill size={20} /> : null }</div>
      </button>

        <div><span className={classNamesListText.join(" ")} >{props.displayAssignment.name}</span>{props.displayAssignment.status===0 ?  <span className={styles.chip}><Chip label={dueChipLabel} color={dueChipStyle} size="small"/></span> : null}</div>

      <button className={styles.deleteButton} onClick={()=>{
          const updatedAssignments = props.currentAssignments.filter((a: AssignmentInterface) => a.id !== props.displayAssignment.id);
          props.setCurrentAssignments(updatedAssignments);
          localStorage.setItem("currentAssignments", JSON.stringify(updatedAssignments));
      }}>
        <TbTrash size={20} />
         </button>
    </div>
  );
}
