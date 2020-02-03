import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const iconStyle = {
  color: "#6a737d",
  fontSize: 18
};

const TaskDetails = ({ task }) => {
  return (
    <article className="task-card">
      <div className="d-flex flex-row">
        <div className="flex-auto min-width-0 position-relative">
          <div className="pl-5 p-2">
            <details className="position-static outline-none">
              <summary className="task-menu position-absolute right-0 top-0 outline-none">
                <MoreHorizIcon style={iconStyle} />
              </summary>
            </details>
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
