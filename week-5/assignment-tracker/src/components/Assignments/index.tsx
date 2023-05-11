import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments(props) {
//TODO: FIX THIS SHIT
    const doneCountTotal = props.currentAssignments.reduce(function(sum: number, assignment) {return sum + (assignment.status + 0);},0);

    return (
    <section className={styles.assignments}>

      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{props.currentAssignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
              {doneCountTotal} of {props.currentAssignments.length}
          </span>
        </div>
      </header>
      <div className={styles.list}>
          {props.currentAssignments.map((assignment: AssignmentInterface)=>(<Assignment key={assignment.id} itemname={assignment.name} itemid={assignment.id} itemstatus={assignment.status} currentAssignments = {props.currentAssignments} setCurrentAssignments = {props.setCurrentAssignments}/>))}
      </div>
    </section>
  );
}
