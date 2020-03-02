import React, { useState, useEffect } from "react";
import SubmitButton from "../Button/SubmitButton";
import CancelButton from "../Button/CancelButton";
import OgpModal from "./ogpModal";

const AddTask = ({
  column,
  isLoading,
  data,
  url,
  createTask,
  getOgp,
  handleToggle
}) => {
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const regex = /^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%#&=]*)?$/;
    const match = regex.test(content);

    if (match) {
      setOpen(true);
      getOgp(content);
    }
  }, [getOgp, content]);

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    const params = {
      task: {
        content: content
      }
    };

    createTask(column.id, params);
    setContent("");
  };

  const handleClose = () => {
    setOpen(false);
    setValue("");
  };

  const canSubmit = () => {
    if (content.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="task-form-area">
      <form>
        <textarea
          onChange={handleChange}
          className="textarea-input full-width"
          autoFocus
          placeholder="Enter task content"
          name="content"
          id="content"
          value={content}
          rows="3"
        ></textarea>
      </form>
      <div className="d-flex mt-1">
        <SubmitButton
          handleClick={handleClick}
          canSubmit={canSubmit}
          value="add task"
        />
        <CancelButton handleClick={handleToggle} />
      </div>
      <OgpModal
        isLoading={isLoading}
        data={data}
        open={open}
        value={value}
        url={url}
        setValue={setValue}
        setContent={setContent}
        handleClose={handleClose}
        createTask={createTask}
        column={column}
      />
    </div>
  );
};

export default AddTask;
