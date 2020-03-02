import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Divider from "@material-ui/core/Divider";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CloseIcon from "@material-ui/icons/Close";
import PrimaryButton from "../Button/PrimaryButton";
import CancelButton from "../Button/CancelButton";

const iconStyle = {
  color: "#6a737d",
  fontSize: 18
};

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: 600
    }
  },
  label: {
    "& .MuiTypography-body1": {
      fontSize: 12,
      fontWeight: 600
    },
    "& .MuiIconButton-root": {
      "&:hover": {
        backgroundColor: "transparent"
      }
    }
  },
  icon: {
    width: 20,
    height: 20
  }
}));

const PrimaryRadio = withStyles({
  root: {
    "&$checked": {
      color: "#11CDEF"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const OgpModal = ({
  open,
  value,
  isLoading,
  data,
  url,
  handleClose,
  setValue
}) => {
  const classes = useStyles();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const getSuccess = () => {
    return Object.keys(data).length !== 0;
  };

  const canSubmit = () => {
    return value === "";
  };

  return (
    <Dialog className={classes.root} open={open} onClose={handleClose}>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className="p-2">
          <div className="d-flex align-center mb-1">
            <div className="modal-header">
              URLを入力すると、形式を選択することが出来ます。
            </div>
            <button className="button-none ml-auto" onClick={handleClose}>
              <CloseIcon className={classes.icon} />
            </button>
          </div>
          <div className="select-box">
            <RadioGroup value={value} onChange={handleChange}>
              {getSuccess() && (
                <>
                  <div className="p-1">
                    <FormControlLabel
                      label="埋め込み"
                      value="ogp"
                      control={<PrimaryRadio />}
                      className={classes.label}
                    />
                    <article className="task-card">
                      <div className="d-flex flex-row">
                        <div className="flex-auto min-width-0 position-relative">
                          <div className="pl-5 p-1">
                            <details className="position-static outline-none">
                              <summary className="task-menu position-absolute right-0 top-0 outline-none">
                                <MoreHorizIcon style={iconStyle} />
                              </summary>
                            </details>
                            <div className="mr-4 d-flex align-content-between flex-column">
                              <p className="mb-1 task-content task-link">
                                {data.title}
                              </p>
                              <small className="text-gray">1 minute ago</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <Divider />
                </>
              )}
              <div className="p-1">
                <FormControlLabel
                  label="URL"
                  value="url"
                  control={<PrimaryRadio />}
                  className={classes.label}
                />
                <div className="url-style">{url}</div>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-1 d-flex">
            <PrimaryButton canSubmit={canSubmit} value="この形式で送信する" />
            <CancelButton handleClick={handleClose} />
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default OgpModal;
