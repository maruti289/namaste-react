import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //We will use the this.state to create the state variable which takes an object
    this.state = {
      count: 0,
      firstName: " ",
      lastName: "Patil",
    };
  }
  render() {
    return (
      <div className="ClassCompo">
        <h1>Class based Component</h1>
        <button
          onClick={() => {
            //setState() Takes an object not a Number
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
          }}
        >
          Click Me
        </button>
        {/* If we are using any state varibale then we need to use it as a this.state */}
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            // setState always takes an object not an number
            this.setState({
              firstName:
                this.state.firstName === " "
                  ? (this.state.firstName = "Maruti Anna Patil")
                  : this.state.firstName,
            });
          }}
        >
          Change The Name
        </button>
        <h1>{this.props.name}</h1>
        <h1>{this.state.firstName}</h1>
        <h1>{this.props.role}</h1>
        <h1>{this.props.company}</h1>
      </div>
    );
  }
}
export default UserClass;
