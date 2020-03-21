import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = props => {
  return <MuiAlert variant="filled" {...props} />;
};

const CustomizedSnackbar = ({ isAsync }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isAsync !== "") {
      setOpen(true);
    }
  }, [isAsync]);

  const handleSeverity = () => {
    switch (isAsync) {
      case "waiting":
        return "info";
      case "failed":
        return "error";
      case "success":
        return "success";
      default:
        return "info";
    }
  };

  const setMessage = () => {
    switch (isAsync) {
      case "waiting":
        return "同期中...";
      case "failed":
        return "同期に失敗しました";
      case "success":
        return "同期が完了しました";
      default:
        return "同期中...";
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      key={"bottom,left"}
    >
      <Alert onClose={handleClose} severity={handleSeverity()}>
        {setMessage()}
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbar;
