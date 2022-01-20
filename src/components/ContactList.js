import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact, id) => {
    return <ContactCard id={id} contact={contact} key={id}></ContactCard>;
  });
  return (
    <div className="ui celled list">
      <h2>Contact List</h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
