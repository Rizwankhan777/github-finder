import React from "react";
import notFound from "../../images/notfound.png";

const UserNotFound = () => {
  return (
    <div style={{ textAlign: "center" }} className="mt-5">
      <img src={notFound} alt="" />
      <h3 className="my-3">USER NOT FOUND</h3>
    </div>
  );
};

export default UserNotFound;
