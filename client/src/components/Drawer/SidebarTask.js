import React, { useContext } from "react";
import Divider from "@material-ui/core/Divider";
import DashboardContext from "../../contexts/DashboardContext";

const SidebarTask = () => {
  const { drawerTask } = useContext(DashboardContext);

  return (
    <>
      <div className="p-2">
        <div className="drawer-task">{drawerTask.content}</div>
        <a
          className="task-url"
          target="_blank"
          rel="noopener noreferrer"
          href={drawerTask.url}
        >
          {drawerTask.url}
        </a>
      </div>
      <Divider />
    </>
  );
};

export default SidebarTask;
