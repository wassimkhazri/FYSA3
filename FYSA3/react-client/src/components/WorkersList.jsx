import React from "react";
import UserNavbar from "./UserNavbar.jsx";

class WorkersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserNavbar handleClick={this.props.handleClick} />
        <div className="site-section bg-light">
          <div className="container">
            <div className="row justify-content-center text-center mb-5 section-2-title">
              <div className="col-md-6">
                <h2 className="mb-4">Meet Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis provident eius ratione velit, voluptas laborum nemo
                  quas ad necessitatibus placeat?
                </p>
              </div>
            </div>

            {this.props.data.map((element) => {
              return (
                <div
                  onClick={() =>
                    this.props.handleProfileClick("worker-profile", element)
                  }
                  className="row align-items-stretch">
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="post-entry-1 h-100 person-1">
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />

                      <div className="post-entry-1-contents">
                        <span className="meta">Founder</span>
                        <h2>
                          {element.first_name}
                          {element.last_name}
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ipsa, sapiente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkersList;
