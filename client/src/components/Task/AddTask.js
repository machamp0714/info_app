import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import OgpModal from "./ogpModal";

const useStyles = makeStyles(() => ({
  submit: {
    width: 165,
    backgroundColor: "#11CDEF",
    color: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#11CDEF",
      boxShadow: "none"
    },
    "&.MuiButton-contained.Mui-disabled": {
      backgroundColor: "#96EFFF",
      color: "#fff"
    }
  },
  cancel: {
    width: 165,
    backgroundColor: "#A5A5AA",
    color: "#FFFFFF",
    boxShadow: "none",
    marginLeft: 20,
    "&:hover": {
      backgroundColor: "#A5A5AA",
      boxShadow: "none"
    }
  }
}));

const AddTask = ({
  column,
  isLoading,
  data,
  url,
  createTask,
  getOgp,
  handleToggle
}) => {
  const classes = useStyles();
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
        content: content,
        confirm: false
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
        <Button
          type="submit"
          onClick={handleClick}
          variant="contained"
          className={classes.submit}
          disabled={canSubmit()}
        >
          add task
        </Button>
        <Button
          variant="contained"
          className={classes.cancel}
          onClick={handleToggle}
        >
          cancel
        </Button>
      </div>
      <OgpModal
        isLoading={isLoading}
        data={data}
        open={open}
        value={value}
        url={url}
        setValue={setValue}
        handleClose={handleClose}
      />
    </div>
  );
};

export default AddTask;
