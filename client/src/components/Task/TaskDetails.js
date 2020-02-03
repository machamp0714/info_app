import React from "react";
import TaskMenu from "./TaskMenu";

const TaskDetails = ({ task }) => {
  return (
    <article className="task-card">
      <div className="d-flex flex-row">
        <div className="flex-auto min-width-0 position-relative">
          <div className="pl-5 p-2">
            <TaskMenu />
            <div className="mr-4 d-flex align-content-between flex-column">
              <div className="task-content">
                <p className="mb-1">{task.content}</p>
              </div>
              <small className="text-gray">
                Added by
                <span>2 days ago</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskDetails;
