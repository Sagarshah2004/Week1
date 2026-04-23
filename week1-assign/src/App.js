import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";
import "./style.css";

function App() {
  return (
    <div>
      <h1>Assignment 1</h1>
      <PersonalInfo />
      <Task2/>
      <Task3/>
      <Task4/>
      <Task5 name="Sagar" age={22} email="sagar@gmail.com" />
      <Task5 name="Rahul" age={24} email="rahul@gmail.com" />
      <Task6/>
    </div>
  );
}

export default App;