import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Assignment(props) {

    const classNamesListText = [];
    if (props.itemstatus === 1) {
        classNamesListText.push(styles.textCompleted);
    }

    const classNamesListButton = [styles.checkContainer];
    if (props.itemstatus === 1) {
        classNamesListButton.push(styles.checkChecked);
    }
    else {
        classNamesListButton.push(styles.checkUnchecked);
    }

    return (
    <div className={styles.assignment}>
      <button className={classNamesListButton.join(" ")} onClick={()=>{
          let newStatus;
          props.itemstatus === 1 ? newStatus = 0 : newStatus = 1;
          const updatedAssignments = props.currentAssignments.map(assignment => {
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
          <div>{props.itemstatus===1? <BsFillCheckCircleFill size={20} /> : null }</div>
      </button>

      <p className={classNamesListText.join(" ")} >{props.itemname} {props.itemid}</p>

      <button className={styles.deleteButton} onClick={()=>{
          const updatedAssignments = props.currentAssignments.filter(a => a.id !== props.itemid);
          props.setCurrentAssignments(updatedAssignments);
          localStorage.setItem("currentAssignments", JSON.stringify(updatedAssignments));
      }}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
