import { LOGO_URL } from "../Utils/Constants";
const HeaderComponent = () => {
  return (
    <div className="HeadComponent">
      <div className="LogoContainer">
        <img className="ImgClass" src={LOGO_URL}></img>
      </div>
      <div className="NavItems">
        <ul className="NavItemsList">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
