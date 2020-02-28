import React, { useContext } from "react";
import DashboardContext from "../../contexts/DashboardContext";

const SidebarTask = () => {
  const { drawerTask } = useContext(DashboardContext);

  return <div>{drawerTask.content}</div>;
};

export default SidebarTask;
