import React from "react";
import WorkerNavbar from "./WorkerNavbar.jsx";
import axios from "axios";

class WorkerFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  componentDidMount() {
    var data = this.props.data._id;
    axios
      .post("/api/orders", { data })
      .then((res) => {
        const orders = res.data;
        console.log("orders", orders);
        this.setState({ orders });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.orders);
    return (
      <div>
        <WorkerNavbar handleClick={this.props.handleClick} />

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
            {this.state.orders.map((element, index) => {
              return (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{element.userName}</td>
                  <td>{element.location}</td>
                  <td>{element.date}</td>
                  <td>
                    <button type="button" class="btn btn-success">
                      Accept
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default WorkerFeed;
