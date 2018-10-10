import React from "react";

class TwitterMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      maxChars: props.maxChars,
      string: ''
    };
  }

  stringSaver = event => {
    // debugger
    let newVal = this.props.maxChars - event.target.value.length
    this.setState({
      maxChars: newVal,
      string: event.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.string} onChange={event => this.stringSaver(event)}/>
        <p>Remaining Character Count: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;

// This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. This prop is being passed in from the App component with the value 140.
//
// You'll find an <input type="text"> in this component. Make this a controlled component by adding the attributes to the <input> element. Its value should be saved in the component's state and should update on every change to the input.
//
// Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.
