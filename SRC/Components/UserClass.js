import React from "react";
class UserClass extends React.Component {
  // 1.When we are using the constructor we must and should need to call the super(props) which extract the required properties like this from the its parent component which is React.Component
  constructor(props) {
    super(props);
    //We will use the this.state to create the state variable which takes an object
    this.state = {
      id: 0,
      name: " ",
      followers: null,
      url: "http//dummy.com",
      location: "Belgium",
      following: null,
      avatar_url: "http://photo.com",
    };
    // console.log(this.props.name + " Constructor ");
  }
  //2.This is the modern way creating the state varibale in the Class based component without the constructor
  // state = {
  //   count: 0,
  //   firstName: " ",
  //   lastName: "Patil",
  // };

  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/maruti289");
    const jsonData = await userData.json();

    this.setState(jsonData);
  }
  render() {
    const { avatar_url, name, location, following, id } = this.props;
    // console.log(this.props.name + " Render ");
    return (
      <div className="ClassCompo">
        <h1>Class based Component</h1>
        {/* <button
          onClick={() => {
            //setState() Takes an object not a Number
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
          }}
        >
          Click Me
        </button> */}
        {/* If we are using any state varibale then we need to use it as a this.state */}
        {/* <h1>Count: {this.state.count}</h1>
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
        </button> */}
        <img src={this.state.avatar_url}></img>
        <h1>{this.state.name}</h1>
        <h1>{this.state.location}</h1>
        <h1>{this.state.following}</h1>
        <h1>{this.state.id}</h1>
      </div>
    );
  }
}
export default UserClass;
