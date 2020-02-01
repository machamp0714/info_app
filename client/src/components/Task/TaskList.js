import React, { useState, useEffect } from "react";
import ProgressBar from "../Layout/ProgressBar";
import { http } from "../../config/axios";

const TaskList = ({ column, taskList }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const taskCount = taskList.length;

  useEffect(() => {
    const getTasks = async () => {
      const result = await http.get(`/api/columns/${column.id}/tasks`);

      setTasks(result.data);
      setLoading(false);
    };

    getTasks();
  }, [column.id, taskCount]);

  return (
    <div id="task-list">
      {isLoading ? (
        <ProgressBar />
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
