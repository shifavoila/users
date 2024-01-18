import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({ contacts, editContactHandler }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Find the contact with the given id
    const existingContact = contacts.find((c) => c.id === id);
    if (existingContact) {
      setContact(existingContact);
    }
  }, [id, contacts]);

  const updateContact = () => {
    // Check if the name and email fields are not empty
    if (contact.name === "" || contact.email === "") {
      alert("All the fields are mandatory!");
      return;
    }

    // Update the contact and navigate back to the contact list
    editContactHandler(contact);
    navigate("/");
  };

  return (
    <div className="max-w-screen-xl p-8 mx-auto my-8 border border-gray-200 rounded shadow-xl sm:px-16 md:w-1/2">
      <h2 className="mb-6 text-2xl font-semibold">Edit User </h2>
      <form className="mx-auto">
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={updateContact}
        >
          Save
        </button>
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditContact;