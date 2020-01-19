import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const RequiredSignin = ({
  WrappedComponent,
  getUser,
  isLoading,
  loggedIn,
  user
}) => {
  useEffect(() => {
    getUser();
  }, [getUser]);

  if (isLoading) {
    return <div>loading</div>;
  } else {
    if (loggedIn) {
      return <WrappedComponent user={user} />;
    }

    return <Redirect to="/signin" />;
  }
};

export default RequiredSignin;
