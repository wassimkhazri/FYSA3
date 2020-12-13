import React from "react";
import axios from "axios";
import OrderItem from "./OrderItem.jsx";

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    axios
      .get("/orders")
      .then((data) => {
        console.log(data.data);
        var orders = data.data;
        this.setState({ orders });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((element, index) => {
          return <OrderItem order={element} key={index} />;
        })}
      </div>
    );
  }
}

export default OrdersList;
