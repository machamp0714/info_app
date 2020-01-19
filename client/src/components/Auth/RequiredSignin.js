import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const RequiredSignin = ({ WrappedComponent, getUser, isLoading, loggedIn }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);

  if (isLoading) {
    return <div>loading</div>;
  } else {
    if (loggedIn) {
      return <WrappedComponent />;
    }

    return <Redirect to="/signin" />;
  }
};

export default RequiredSignin;
