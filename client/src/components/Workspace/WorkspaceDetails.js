import React from "react";
import { diffCreatedAt } from "../../utils/timestamp";
import WorkspaceMenu from "../../containers/Workspace/WorkspaceMenu";

const WorkspaceDetails = ({ workspace }) => {
  return (
    <li className="item-card mb-1">
      <div className="d-flex flex-row">
        <div className="flex-auto min-width-0 position-relative">
          <div className="pl-5 p-2">
            <WorkspaceMenu workspace={workspace} />
            <div className="mr-4 d-flex align-content-between flex-column">
              <div className="task-content">
                <p className="mb-1">{workspace.name}</p>
              </div>
              <small className="text-gray timestamp">
                {diffCreatedAt(workspace.created_at)}
              </small>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkspaceDetails;
