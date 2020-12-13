import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/workerRegister.jsx";
import UserRegister from "./components/UserRegister.jsx";
import Home from "./components/Home.jsx";
import WorkerLogin from "./components/Login.jsx";
import UserFeed from "./components/UserFeed.jsx";
import OrdersList from "./components/OrdersList.jsx";
import WorkersList from "./components/WorkersList.jsx";
import WorkerPrfile from "./components/WorkerProfile.jsx";
import Button from "react-bootstrap/Button";
import axios from "axios";
import WorkerProfile from "./components/WorkerProfile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      user: {},
      profile: {},
      workers: []
    };
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickProf = this.handleClickProf.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleClick(view) {
    this.setState({ view });
  }
  handleClickProf(prof) {
    axios
      .post("/api/workers", { prof })
      .then((res) => {
        console.log("workers sent", res);
        this.setState({ workers: res.data, view: "workers-list" });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleProfileClick(view, profile) {
    this.setState({ view, profile });
  }
  componentDidMount() {}
  handleLogin(user) {
    axios
      .post("/login", user)
      .then((user) => {
        if (user.data.prof) {
          this.setState({ user: user.data, view: "worker-feed" });
        } else {
          this.setState({ user: user.data, view: "user-feed" });
        }
        console.log(user.data);
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
          <UserRegister />
        </div>
      );
    } else if (this.state.view === "worker-signup") {
      return (
        <div>
          <Register />
        </div>
      );
    } else if (this.state.view === "worker-feed") {
      return (
        <div>
          <Register />
        </div>
      );
    } else if (this.state.view === "user-feed") {
      return (
        <div>
          <UserFeed
            handleClickProf={this.handleClickProf}
            handleClick={this.handleClick}
          />
        </div>
      );
    } else if (this.state.view === "workers-list") {
      return (
        <div>
          <WorkersList
            handleClick={this.handleClick}
            handleProfileClick={this.handleProfileClick}
            data={this.state.workers}
          />
        </div>
      );
    } else if (this.state.view === "worker-profile") {
      return (
        <div>
          <WorkerProfile
            handleClick={this.handleClick}
            data={this.state.profile}
          />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
