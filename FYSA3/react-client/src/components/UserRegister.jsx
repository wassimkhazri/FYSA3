import React, { Component } from "react";
import axios from "axios";

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(event) {
    event.preventDefault();
    var data = this.state;
    console.log(data);
    axios
      .post("/register/user", { data })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("There's an error", err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <div className="site-section bg-light">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-4 mx-auto">
                  <h2 className="line-bottom text-center">
                    User Registeration
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-3">
                  <div className="testimonial-3">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="quick-contact-form bg-white">
                      <h2>Please fill-in the form to register.</h2>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.userName}
                            name="userName"
                            onChange={this.handleChange}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="User name"
                          />
                        </div>{" "}
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>{" "}
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.LastName}
                            name="LastName"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.phone}
                            name="phone"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.location}
                            name="location"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Location"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-primary px-5"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegister;
