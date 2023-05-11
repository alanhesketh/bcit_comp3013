import React from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {

    let initialAssignments = [];
    let storedData = localStorage.getItem('currentAssignments');
    storedData != null ? initialAssignments = JSON.parse(storedData) : initialAssignments = [];

    const [currentAssignments, setCurrentAssignments] = React.useState(initialAssignments);

    return (
    <>
      <Header currentAssignments = {currentAssignments} setCurrentAssignments = {setCurrentAssignments} />
      <Assignments currentAssignments = {currentAssignments} setCurrentAssignments = {setCurrentAssignments} />
    </>
  );
}

export default App;


