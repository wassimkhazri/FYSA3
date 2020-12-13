import React from "react";
import UserNavbar from "./UserNavbar.jsx";
import Order from "./Order.jsx";

class WorkerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.order = this.order.bind(this);
  }

  order() {
    this.setState({ display: !this.state.display });
  }

  render() {
    if (!this.state.display) {
      return (
        <div>
          <UserNavbar handleClick={this.props.handleClick} />
          <div className="col-md-4 sidebar">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>
            <div className="sidebar-box">
              <img
                src="images/person_1.jpg"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid mb-4 w-50 rounded-circle"
              />
              <div class="info">
                <h2 class="text-black mb-4">Contact Info</h2>
                <div class="col-xl-4 mr-0">
                  <div class=" p-0 p-md-0">
                    <h3>
                      <ul class="list-unstyled footer-link">
                        <li class="d-block mb-3">
                          <li class="d-block mb-3">
                            <span class="d-block text-black">Name:</span>
                            <span>
                              {this.props.data.firstName}_
                              {this.props.data.lastName}
                            </span>
                          </li>
                          <li class="d-block mb-3">
                            <span class="d-block text-black">Email:</span>
                            <span>{this.props.data.email}</span>
                          </li>
                          <li class="d-block mb-3">
                            <span class="d-block text-black">Phone:</span>
                            <span>{this.props.data.phone}</span>
                            <li class="d-block mb-3"></li>
                            <span class="d-block text-black">Profession:</span>
                            <span>{this.props.data.prof}</span>
                          </li>
                          <span class="d-block text-black">Location</span>
                          <span>{this.props.data.location}</span>
                        </li>
                      </ul>
                    </h3>
                  </div>
                </div>
              </div>
              <p>
                <a
                  href="#"
                  className="btn btn-primary btn-md text-white"
                  onClick={this.order}>
                  Order
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <UserNavbar handleClick={this.props.handleClick} />
          <div className="col-md-4 sidebar">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>
            <div className="sidebar-box">
              <img
                src="images/person_1.jpg"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid mb-4 w-50 rounded-circle"
              />
              <div class="info">
                <h2 class="text-black mb-4">Contact Info</h2>
                <div class="col-xl-4 mr-0">
                  <div class=" p-0 p-md-0">
                    <h3>
                      <ul class="list-unstyled footer-link">
                        <li class="d-block mb-3">
                          <li class="d-block mb-3">
                            <span class="d-block text-black">Name:</span>
                            <span>
                              {this.props.data.firstName}_
                              {this.props.data.lastName}
                            </span>
                          </li>
                          <li class="d-block mb-3">
                            <span class="d-block text-black">Email:</span>
                            <span>{this.props.data.email}</span>
                          </li>
                          <li class="d-block mb-3">
                            <span class="d-block text-black">Phone:</span>
                            <span>{this.props.data.phone}</span>
                            <li class="d-block mb-3"></li>
                            <span class="d-block text-black">Profession:</span>
                            <span>{this.props.data.prof}</span>
                          </li>
                          <span class="d-block text-black">Location</span>
                          <span>{this.props.data.location}</span>
                        </li>
                      </ul>
                    </h3>
                  </div>
                </div>
              </div>
              <p></p>
              <Order />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default WorkerProfile;
