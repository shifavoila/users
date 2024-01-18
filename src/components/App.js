import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Navbar from "./navbar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import EditContact from './EditContact';

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const editContactHandler = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const Home = (props) => (
    <ContactList
      {...props}
      contacts={contacts}
      getContactId={removeContactHandler}
    />
  );

  const AddContactComponent = (props) => (
    <AddContact {...props} addContactHandler={addContactHandler} />
  );
  
  return (
    <Router>
      <Navbar />

      <div className="max-w-screen-xl p-4 sm:px-16">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add" element={<AddContactComponent />} />
          <Route path="/app/:id" element={<ContactDetails />} />
          <Route path="/edit/:id" element={<EditContact contacts={contacts} editContactHandler={editContactHandler} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;