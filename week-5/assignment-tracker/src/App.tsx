import React from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
    let initialAssignments = [];
    const storedData = localStorage.getItem('currentAssignments');
    storedData === null ? initialAssignments = [] : initialAssignments = JSON.parse(storedData);

    const [currentAssignments, setCurrentAssignments] = React.useState(initialAssignments);

    return (
    <>
      <Header currentAssignments = {currentAssignments} setCurrentAssignments = {setCurrentAssignments} />
      <Assignments currentAssignments = {currentAssignments} setCurrentAssignments = {setCurrentAssignments} />
    </>
  );
}

export default App;


