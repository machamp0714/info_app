import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
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

const AddTask = ({ column, createTask, handleToggle }) => {
  const classes = useStyles();
  const [content, setContent] = useState("");

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
          className="task-input"
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
    </div>
  );
};

export default AddTask;
