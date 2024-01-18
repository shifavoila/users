import React from "react";
import user from "../images/user.png";
import profile from "../images/profile.jpg";
import { Link, useLocation } from "react-router-dom";

const ContactDetails = (props) => {
  const location = useLocation();
  console.log("Location state:", location.state);

  if (!location.state || !location.state.contact) {
    return <div>No contact data available</div>;
  }
  const { name, email } = location.state.contact;
  
  return (
    <div className="md:w-1/2 p-6 mx-auto my-10 text-center border border-gray-400 rounded shadow-xl">
        <img src={profile} alt="user" className="block mx-auto"/>
        
        <div className="flex flex-col my-4 space-y-2 content w-1/2 mx-auto">
          <div className="flex justify-between">
            <div className="font-semibold">Name</div>
            <div className="text-left">{name}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Email</div>
            <div>{email}</div>
          </div>
        </div>
        <Link to="/">
          <button className="px-4 py-2 text-white duration-300 ease-in-out bg-blue-500 rounded shadow-xl hover:bg-blue-600">Back to Users</button>
        </Link>
    </div>    
  );
};

export default ContactDetails;
