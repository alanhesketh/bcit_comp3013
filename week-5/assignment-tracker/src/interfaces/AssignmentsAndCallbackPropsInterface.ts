import AssignmentInterface from "./AssingmentInterface";
import {setAssignmentsCallback} from "../types/SetAssignmentsCallback";

export interface AssignmentsAndCallbackProps { currentAssignments: AssignmentInterface, setCurrentAssignments: setAssignmentsCallback };