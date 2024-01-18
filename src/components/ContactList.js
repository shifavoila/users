import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
        editContactHandler={props.editContactHandler}
      />
    );
  });
  return <div className="p-4 mx-auto my-auto sm:px-16">
    <div className="flex justify-between w-full">
    <h1 className="mb-4 text-2xl font-semibold">Users</h1>
    <Link to="/add">
      <button className="px-4 py-2 text-white duration-300 ease-in-out rounded shadow-xl bg-emerald-500 hover:bg-emerald-400 flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 me-1.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        Add User</button>
    </Link>
    </div>
    
    {renderContactList}
    </div>;
};

export default ContactList;
