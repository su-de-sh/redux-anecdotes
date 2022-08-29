import { useSelector } from "react-redux";
import React from "react";

const Notification = () => {
  const notification = useSelector((state) => state.notifications);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  if (!notification) return null;

  return <div style={style}>{notification}</div>;
};

export default Notification;
