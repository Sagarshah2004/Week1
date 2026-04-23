import React from "react";

function Task3() {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good Morning 🌅";
  } else if (hour < 18) {
    message = "Good Afternoon ☀️";
  } else {
    message = "Good Evening 🌙";
  }

  return (
    <div>
      <h2>{message}, Sagar Kumar Sha!</h2>
    </div>
  );
}

export default Task3;