import React from "react";

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>{this.props.order.location}</h3>
        <h3>{this.props.order.date}</h3>
        <h3>{this.props.order.state}</h3>
      </div>
    );
  }
}

export default OrderItem;
