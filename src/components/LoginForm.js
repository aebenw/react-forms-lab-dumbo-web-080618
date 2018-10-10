import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  logIn = event => {
    event.preventDefault()
    console.log(this.state)
  }

  updateInfo = (event) => {
  this.setState({
  [event.target.name]: event.target.value
  })
  }

  render() {
    return (
      <form onSubmit={event => this.logIn(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.updateInfo(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.updateInfo(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;


// This component takes one prop: onSubmit which is a function — this function is called when the form is being submitted. By default, this function is currently just includes console.log that will allow you to see if the form is functioning correctly when working in your browser.
//
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary attributes to these inputs. The input values should be saved to the component's state, again on every change.
//
// An example of an input would look like:
//
//    <input
//      id="test-username"
//      type="text"
//      name="username"
//      value={this.state.username}
//      onChange={this.handleInputChange}
//    />
// Remember that you can retrieve the input name and value of an event.target from the JS event.
//
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
//
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
