import React from "react";

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="order-messsage">
          <div class="col-md-12">
            <textarea
              name=""
              id=""
              class="form-control"
              placeholder="Write your order."
              cols="30"
              rows="10"></textarea>
          </div>
          <input
            type="submit"
            class="btn btn-block btn-primary text-white py-3 px-5"
            value="Send Order"></input>
        </div>
      </div>
    );
  }
}

export default Order;
