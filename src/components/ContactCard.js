import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { fname, lname, phone, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{fname}</div>
        <div className="header">{lname}</div>
        <div>{phone}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", float: "right" }}
      ></i>
    </div>
  );
};

export default ContactCard;
