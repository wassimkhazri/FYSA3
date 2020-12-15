import React from "react";
import ReactDOM from "react-dom";
import WorkerRegister from "./components/workerRegister.jsx";
import UserRegister from "./components/UserRegister.jsx";
import Home from "./components/Home.jsx";
import UserFeed from "./components/UserFeed.jsx";
import WorkerFeed from "./components/WorkerFeed.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      user: {},
      profile: {},
      workers: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleClick(view) {
    this.setState({ view });
  }

  componentDidMount() {}
  handleLogin(user) {
    axios
      .post("/login", user)
      .then((user) => {
        if (user) {
          if (user.data.prof) {
            this.setState({ user: user.data, view: "worker-feed" });
          } else {
            this.setState({ user: user.data, view: "user-feed" });
          }
          console.log(user);
        } else {
          this.setState({
            view: "home"
          });
        }
        window.localStorage.setItem("auth-token", user.data.auth-token);
        console.log(this.state.user);
      })
      .catch((error) => {
        console.log("error");
      });
  }
  render() {
    if (this.state.view === "home") {
      return (
        <Home handleClick={this.handleClick} handleLogin={this.handleLogin} />
      );
    } else if (this.state.view === "user-signup") {
      return (
        <div>
          <UserRegister handleSubmit={this.handleClick} />
        </div>
      );
    } else if (this.state.view === "worker-signup") {
      return (
        <div>
          <WorkerRegister handleSubmit={this.handleClick} />
        </div>
      );
    } else if (this.state.view === "worker-feed") {
      return (
        <div>
          <WorkerFeed handleClick={this.handleClick} data={this.state.user} />
        </div>
      );
    } else if (this.state.view === "user-feed") {
      return (
        <div>
          <UserFeed data={this.state.user} handleClick={this.handleClick} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
