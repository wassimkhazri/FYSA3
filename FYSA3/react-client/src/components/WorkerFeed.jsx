import React from "react";
import WorkerNavbar from "./WorkerNavbar.jsx";
import axios from "axios";

class WorkerFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panding: [],
      doing: [],
      done: []
    };
    this.handleAccept = this.handleAccept.bind(this);
  }
  componentDidMount() {
    var data = this.props.data._id;
    axios
      .post("/api/orders/panding", { data })
      .then((res) => {
        const panding = res.data;
        console.log("panding", panding);
        this.setState({ panding });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("/api/orders/doing", { data })
      .then((res) => {
        const doing = res.data;
        console.log("doing", doing);
        this.setState({ doing });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("/api/orders/done", { data })
      .then((res) => {
        const done = res.data;
        console.log("done", done);
        this.setState({ done });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleAccept(id, state) {
    var data = {
      id,
      state
    };
    console.log(data);
    axios
      .put("/order/update", data)
      .then((data) => {
        console.log(data);
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.orders);
    return (
      <div className="workerfeed ">
        <WorkerNavbar handleClick={this.props.handleClick} />
        <div className="pandingorders container">
          <h1>Pending Orders</h1>
          <table className="table table-striped orders">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Operation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.panding.map((element, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{element.userName}</td>
                    <td>{element.location}</td>
                    <td>{element.date}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleAccept(element._id, "doing");
                        }}
                        type="button"
                        className="btn btn-success accbtn">
                        Accept
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="doingorders container">
          <h1>Accepted Orders</h1>
          <table className="table table-striped orders">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Operation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.doing.map((element, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{element.userName}</td>
                    <td>{element.location}</td>
                    <td>{element.date}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleAccept(element._id, "done");
                        }}
                        type="button"
                        className="btn btn-success accbtn">
                        Done
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="doneorders container">
          <h1>Orders History</h1>
          <table className="table table-striped orders">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.done.map((element, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{element.userName}</td>
                    <td>{element.location}</td>
                    <td>{element.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default WorkerFeed;
