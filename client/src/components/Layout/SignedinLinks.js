import React from "react";

const SignedinLinks = () => {
  const user = JSON.parse(localStorage.getItem("user")); // parse => 値をJSONとして解析し、jsオブジェクトを構築する

  return (
    <div className="nav-profile">
      <div className="profile-image">
        <img className="avatar-small" src={user.image} alt="avatar" />
      </div>
      <div className="nav-user">{user.name}</div>
    </div>
  );
};

export default SignedinLinks;
