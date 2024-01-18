import React from "react";

class AddUser extends React.Component {
    state = {
        username: "",
        email: "",
        phone: "",
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.username === "" || this.state.email === "" || this.state.phone === "") {
            alert("All the fields are mandatory!");
            return
        }
        this.props.addUserHandler(this.state)
        console.log(this.state)
    }
    render() {
        return (
            <div className="container mx-auto mt-8">
                <form className="max-w-md p-6 mx-auto bg-white rounded-md shadow-xl" onSubmit={this.add}>
                    <h2 className="mb-6 text-2xl font-semibold">Create User </h2>

                    <div className="mb-4">
                    <label htmlFor="username" className="block mb-2 text-sm font-bold text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your username" onChange={ (e) => this.setState({username: e.target.value})}
                    />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email" onChange={ (e) => this.setState({email: e.target.value})}
                    />
                    </div>

                    {/* Phone Field */}
                    <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your phone number" onChange={ (e) => this.setState({phone: e.target.value})}
                    />
                    </div>

                    {/* Submit Button */}
                    <button
                    type="submit"
                    className="w-full p-3 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                    Submit
                    </button>
                </form>
            </div>
        );
    }
};

export default AddUser;