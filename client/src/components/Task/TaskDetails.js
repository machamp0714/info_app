import React, { useContext } from "react";
import clsx from "clsx";
import TaskMenu from "../../containers/Task/TaskMenu";
import { diffCreatedAt } from "../../utils/timestamp";
import DashboardContext from "../../contexts/DashboardContext";
import { ItemTypes } from "../../config/dragTypes";
import { useDrag } from "react-dnd";

const TaskDetails = ({ task, editTask }) => {
  const { setOpen, state, setState } = useContext(DashboardContext);

  const [, drag] = useDrag({
    item: { type: ItemTypes.TASK, task: task },
    end: (item, monitor) => {
      const result = monitor.getDropResult();

      if (result !== null) {
        handleDroped(item.task, result.column);
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const handleDroped = (dragedTask, column) => {
    const params = {
      task: {
        column_id: column.id
      }
    };
    editTask(dragedTask.id, params);
  };

  const handleTaskOpen = () => {
    setOpen(true);
    setState({
      workspacesOpen: false,
      stocksOpen: false,
      drawerTask: task
    });
  };

  return (
    <article ref={drag} className="task-card">
      <div className="d-flex flex-row">
        <div className="flex-auto min-width-0 position-relative">
          <div className="pl-5 p-1">
            <TaskMenu task={task} />
            <div className="mr-4 d-flex align-content-between flex-column">
              <p
                onClick={handleTaskOpen}
                className={clsx("mb-1 task-content", {
                  "task-link": task.url !== null
                })}
              >
                {task.content}
              </p>
              <small className="text-gray">
                {diffCreatedAt(task.created_at)}
              </small>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskDetails;
