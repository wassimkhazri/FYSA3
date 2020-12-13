import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="main-block">
          <h1>Registration</h1>
          <form action="/">
            <hr />
            <div className="account-type">
              <input
                type="radio"
                value="none"
                id="radioOne"
                name="account"
                checked
              />
              <label htmlFor="radioOne" className="radio">
                Personal
              </label>
              <input type="radio" value="none" id="radioTwo" name="account" />
              <label htmlFor="radioTwo" className="radio">
                Company
              </label>
            </div>
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Email"
              required
            />
            <label id="icon" htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input type="text" name="name" placeholder="Name" required />
            <label id="icon" htmlFor="name">
              <i className="fas fa-unlock-alt"></i>
            </label>
            <input
              type="password"
              name="name"
              placeholder="Password"
              required
            />
            <hr />
            <div className="gender">
              <input
                type="radio"
                value="none"
                id="male"
                name="gender"
                checked
              />
              <label htmlFor="male" className="radio">
                Male
              </label>
              <input type="radio" value="none" id="female" name="gender" />
              <label htmlFor="female" className="radio">
                Female
              </label>
            </div>
            <hr />
            <div className="btn-block">
              <button type="submit" href="/">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
