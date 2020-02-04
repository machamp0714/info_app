import React from "react";
import TaskMenu from "../../containers/Task/TaskMenu";

const TaskDetails = ({ task }) => {
  const diffCreatedAt = () => {
    const taskCreatedAt = new Date(task.created_at);
    const now = new Date();
    const monthDiff = now.getMonth() - taskCreatedAt.getMonth();
    const dateDiff = now.getDate() - taskCreatedAt.getDate();

    if (monthDiff === 0) {
      if (dateDiff === 0) {
        return "today";
      } else if (dateDiff === 1) {
        return "1 day ago";
      } else {
        return `${dateDiff} days ago`;
      }
    } else if (monthDiff === 1) {
      return "1 month ago";
    } else {
      return `${monthDiff} months ago`;
    }
  };

  return (
    <article className="task-card">
      <div className="d-flex flex-row">
        <div className="flex-auto min-width-0 position-relative">
          <div className="pl-5 p-2">
            <TaskMenu task={task} />
            <div className="mr-4 d-flex align-content-between flex-column">
              <div className="task-content">
                <p className="mb-1">{task.content}</p>
              </div>
              <small className="text-gray">{diffCreatedAt()}</small>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskDetails;
