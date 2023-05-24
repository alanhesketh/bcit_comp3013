import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import  AssignmentsAndCallbackProps from "../../interfaces/AssignmentPropsInterface.ts";
import AssignmentInterface from "../../interfaces/AssingmentInterface";

export function Assignments(props: AssignmentsAndCallbackProps) {

    const doneCountTotal = props.currentAssignments.reduce(function(sum: number, assignment: AssignmentInterface) {return sum + (assignment.status + 0);},0);

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
          {props.currentAssignments.map((assignment: AssignmentInterface)=>(<Assignment key={assignment.id} displayAssignment={assignment} currentAssignments = {props.currentAssignments} setCurrentAssignments = {props.setCurrentAssignments}/>))}
      </div>

    </section>
  );
}
