import React, { useState, useEffect } from "react";
import { http } from "../../config/axios";

const TaskList = ({ column, taskList }) => {
  const [tasks, setTasks] = useState([]);
  const taskCount = taskList.length;

  useEffect(() => {
    const getTasks = async () => {
      const result = await http.get(`/api/columns/${column.id}/tasks`);

      setTasks(result.data);
    };

    getTasks();
  }, [column.id, taskCount]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.content}</li>
      ))}
    </ul>
  );
};

export default TaskList;
