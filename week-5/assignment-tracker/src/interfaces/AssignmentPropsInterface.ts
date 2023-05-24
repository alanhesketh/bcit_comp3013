import setAssignmentsCallback from "../types/SetAssignmentsCallback";
import AssignmentInterface from "./AssingmentInterface";

export default interface AssignmentProps {
    displayAssignment: AssignmentInterface,
    currentAssignments: [] AssignmentInterface,
    setCurrentAssignments: setAssignmentsCallback,
}
