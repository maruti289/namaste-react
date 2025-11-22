const User = (props) => {
  const { name, role, company } = props;
  return (
    <div className="UserFunClass">
      <h1>Functional Component</h1>
      <h1>Name: {name}</h1>
      <h1>Role: {role}</h1>
      <h1>Company: {company}</h1>
    </div>
  );
};
export default User;
