import React from "react";

const TaskDetails = ({ task }) => {
  return <article className="task-card">{task.content}</article>;
};

export default TaskDetails;
