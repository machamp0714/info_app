import React, { useState, useEffect } from "react";
import TaskDetails from "../../containers/Task/TaskDetails";
import ProgressBar from "../Layout/ProgressBar";
import { http } from "../../config/axios";

const TaskList = ({ column, taskList }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getTasks = async () => {
      const result = await http.get(`/api/columns/${column.id}/tasks`);

      if (isMounted) {
        setTasks(result.data);
        setLoading(false);
      }
    };

    getTasks();

    return () => {
      isMounted = false;
    };
  }, [column.id, taskList]);

  if (isLoading) {
    return (
      <div className="center mt-1">
        <ProgressBar />
      </div>
    );
  }

  return (
    <div className="task-list position-relative">
      {tasks.map(task => (
        <TaskDetails key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
