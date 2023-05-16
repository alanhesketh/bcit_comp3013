import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AssignmentProps, {AssignmentInterface} from "../interfaces";

export function Assignment(props: AssignmentProps) {

    const classNamesListText = [];
    const classNamesListButton = [styles.checkContainer];

    if (props.itemstatus === 1) {
        classNamesListText.push(styles.textCompleted);
        classNamesListButton.push(styles.checkChecked);
    }
    else {
        classNamesListButton.push(styles.checkUnchecked);
    }

    return (
    <div className={styles.assignment}>
      <button className={classNamesListButton.join(" ")} onClick={()=>{
          let newStatus: number;
          props.itemstatus === 1 ? newStatus = 0 : newStatus = 1;
          const updatedAssignments = props.currentAssignments.map((assignment: AssignmentInterface) => {
              if (assignment.id === props.itemid) {
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
          <div>{props.itemstatus===1 ? <BsFillCheckCircleFill size={20} /> : null }</div>
      </button>

      <p className={classNamesListText.join(" ")} >{props.itemname}</p>

      <button className={styles.deleteButton} onClick={()=>{
          const updatedAssignments = props.currentAssignments.filter((a: AssignmentInterface) => a.id !== props.itemid);
          props.setCurrentAssignments(updatedAssignments);
          localStorage.setItem("currentAssignments", JSON.stringify(updatedAssignments));
      }}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
