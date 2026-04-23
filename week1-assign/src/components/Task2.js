import React from "react";

function Task2() {
  const now = new Date();

  return (
    <div>
      <h2>Current Date & Time</h2>
      <p>{now.toLocaleString()}</p>
    </div>
  );
}

export default Task2;