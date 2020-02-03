import React from "react";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const CssCircularProgress = withStyles({
  root: {
    "& .MuiCircularProgress-svg": {
      color: "#11CDEF"
    }
  }
})(CircularProgress);

const ProgressBar = () => {
  return <CssCircularProgress disableShrink />;
};

export default ProgressBar;
