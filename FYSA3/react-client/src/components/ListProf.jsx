import React from "react";
import axios from "axios";

class ListProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: [],
      prof: "",
      workers: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/profs")
      .then((res) => {
        const profs = res.data;
        console.log("profs", profs);
        this.setState({ profs });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    var prof = e.currentTarget.value;
    this.setState({ prof });

    axios
      .post("http://localhost:3000/api/workers", { prof })
      .then((res) => {
        console.log("workers sent", res);
        this.setState({ workers: res.data }, () => {});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="profs">Choose a prof:</label>
          <select name="profs" id="profs" onChange={this.handleChange}>
            <option>Profession</option>
            {this.state.profs.map((prof, index) => (
              <option>{prof.name}</option>
            ))}
          </select>
        </form>
        {this.state.prof}
        {this.state.workers.map((worker, index) => (
          <p>{worker.username}</p>
        ))}
      </div>
    );
  }
}

export default ListProf;
