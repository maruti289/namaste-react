import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="AboutContainer">
      <h1>This is the About Us Page</h1>
      <h2>We are coming soon!</h2>
      <User
        name={"Maruti Patil"}
        role={"Associate Software Engineer"}
        company={"Hexa"}
      />
      <UserClass
        name={"Maruti Patil"}
        role={"Associate Software Engineer"}
        company={"Hexa"}
      />
    </div>
  );
};
export default About;
