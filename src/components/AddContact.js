import React from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    name: "",
    email: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="max-w-screen-xl p-8 mx-auto my-8 border border-gray-200 rounded shadow-xl sm:px-16 md:w-1/2">
      <h2 className="mb-6 text-2xl font-semibold">Create User </h2>
      <form className="mx-auto" onSubmit={add}>
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
