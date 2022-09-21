/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";

import { connect } from "react-redux";
import React from "react";

const Notification = (props) => {
  // const notification = useSelector((state) => state.notifications);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  if (!props.notifications) return null;

  return <div style={style}>{props.notifications}</div>;
};
const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
