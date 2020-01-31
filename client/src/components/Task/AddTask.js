import React, { useState } from "react";

const AddTask = ({ column, createTask, handleToggle }) => {
  const [content, setContent] = useState("");

  return (
    <div className="task-form-area">
      <form>
        <textarea
          className="task-input"
          autoFocus
          placeholder="Enter task content"
          name="content"
          id="content"
          rows="5"
        ></textarea>
      </form>
      <div className="d-flex mt-1">
        <button type="button">Add Task</button>
        <button onClick={handleToggle} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTask;
