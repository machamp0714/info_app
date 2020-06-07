import React, { useContext } from "react";
import clsx from "clsx";
import qiitaIcon from "../../images/qiita.png";
import DashboardContext from "../../contexts/DashboardContext";

const DrawerMenu = () => {
  const { open, handleWorkspaceClick, handleStocksClick } = useContext(
    DashboardContext
  );

  return (
    <ul>
      <li
        onClick={handleWorkspaceClick}
        className={clsx("sidebar-item d-flex mb-2", {
          "sidebar-item-open": open
        })}
      >
        <img src={qiitaIcon} className="sidebar-icon" alt="workspace icon" />
        {open && <div className="sidebar-item-content">Workspace</div>}
      </li>
      <li
        onClick={handleStocksClick}
        className={clsx("sidebar-item d-flex mb-2", {
          "sidebar-item-open": open
        })}
      >
        <img src={qiitaIcon} className="sidebar-icon" alt="workspace icon" />
        {open && <div className="sidebar-item-content">Qiita</div>}
      </li>
    </ul>
  );
};

export default DrawerMenu;
