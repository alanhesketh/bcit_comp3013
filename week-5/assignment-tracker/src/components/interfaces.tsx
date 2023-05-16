export type setAssignmentsCallback = (assignments: string []) => void;

export interface AssignmentInterface { id: number, name: string, status: number }

export interface AssignmentsAndCallbackProps { currentAssignments: AssignmentInterface, setCurrentAssignments: setAssignmentsCallback }

export default interface AssignmentProps {
    currentAssignments: AssignmentInterface,
    setCurrentAssignments: setAssignmentsCallback,
    key: number,
    itemname: string,
    itemid: number,
    itemstatus: number,
}
