import React from "react";
import axios from "axios";
class UserOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      panding: [],
      doing: [],
      done: []
    };
  }
  componentDidMount() {
    var data = this.props.data._id;
    axios
      .post("/api/orders/user/panding", { data })
      .then((res) => {
        const panding = res.data;
        console.log("panding", panding);
        this.setState({ panding });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("/api/orders/user/doing", { data })
      .then((res) => {
        const doing = res.data;
        console.log("doing", doing);
        this.setState({ doing });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("/api/orders/user/done", { data })
      .then((res) => {
        const done = res.data;
        console.log("done", done);
        this.setState({ done });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="userorders">
        <div className="workerfeed ">
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
      </div>
    );
  }
}
export default UserOrders;
