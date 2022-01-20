import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      phone: "",
      email: "",
    };
  }

  add = (e) => {
    e.preventDefault();
    if (
      this.state.fname === "" ||
      this.state.lname === "" ||
      this.state.phone === "" ||
      this.state.email === ""
    ) {
      alert("All the fields are required MF");
      return;
    }
    this.props.addContactHandler(this.state);
    console.log(this.state);
    this.setState({ fname: "", lname: "", phone: "", email: "" });
  };
  render() {
    return (
      <div className="ui main"  style = {{paddingTop: "50px"}}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={this.state.fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={this.state.lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>
          <button className="ui button blue">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
