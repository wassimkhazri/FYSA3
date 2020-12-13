import React from "react";
import UserNavbar from "./UserNavbar.jsx";
import axios from "axios";

class UserFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/profs")
      .then((res) => {
        const profs = res.data;
        console.log("profs", profs);
        this.setState({ profs });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <UserNavbar handleClick={this.props.handleClick} />

        <div className="site-section" style={{ backgroundColor: "#dedffe" }}>
          <div className="container">
            <div className="row align-items-stretch">
              {this.state.profs.map((element) => {
                return (
                  <div
                    onClick={() => {
                      this.props.handleClickProf(element.name);
                    }}
                    className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                    <div className="service-2 h-100">
                      <div className="svg">
                        <img src={element.img} alt="Image" className="" />
                      </div>

                      <h3>
                        <span>{element.name}</span>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserFeed;
