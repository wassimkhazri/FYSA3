import React from "react";
import UserNavbar from "./UserNavbar.jsx";

class WorkerProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <div className="categories">
              <h3>Categories</h3>
              <li>
                <a href="#">
                  Creatives <span>(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  News <span>(22)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Design <span>(37)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  HTML <span>(42)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Web Development <span>(14)</span>
                </a>
              </li>
            </div>
          </div>
          <div className="sidebar-box">
            <img
              src="images/person_1.jpg"
              alt="Free Website Template by Free-Template.co"
              className="img-fluid mb-4 w-50 rounded-circle"
            />
            <h3 className="text-black">
              {this.props.data.first_name}
              {this.props.data.last_name}
            </h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
            <p>
              <a href="#" className="btn btn-primary btn-md text-white">
                Read More
              </a>
            </p>
          </div>

          <div className="sidebar-box">
            <h3 className="text-black">Paragraph</h3>
            <p>
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove,
              the headline of Alphabet Village and the subline of her own road,
              the Line Lane. Pityful a rethoric question ran over her cheek,
              then she continued her way.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkerProfile;
