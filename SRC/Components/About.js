// import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent component did mount called");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="AboutContainer">
        <h1>This is the About Us Page</h1>
        <h2>We are coming soon!</h2>
        <UserClass
          name={"First"}
          role={"Associate Software Engineer-1"}
          company={"Hexa"}
        />
      </div>
    );
  }
}

export default About;
