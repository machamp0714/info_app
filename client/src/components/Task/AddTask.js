import React, { useState } from "react";

const AddTask = ({ column, createTask, handleToggle }) => {
  const [content, setContent] = useState("");

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    const params = {
      task: {
        content: content
      }
    };

    createTask(column.id, params);
    setContent("");
  };

  return (
    <div className="task-form-area">
      <form>
        <textarea
          onChange={handleChange}
          className="task-input"
          autoFocus
          placeholder="Enter task content"
          name="content"
          id="content"
          value={content}
          rows="5"
        ></textarea>
      </form>
      <div className="d-flex mt-1">
        <button onClick={handleClick} type="button">
          Add Task
        </button>
        <button onClick={handleToggle} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTask;
