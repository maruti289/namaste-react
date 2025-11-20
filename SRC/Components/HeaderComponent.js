import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router";
const HeaderComponent = () => {
  return (
    <div className="HeadComponent">
      <div className="LogoContainer">
        <img className="ImgClass" src={LOGO_URL}></img>
      </div>
      <div className="NavItems">
        <ul className="NavItemsList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
