import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="HeadComponent">
      <div className="LogoContainer">
        <img
          className="ImgClass"
          src="https://imgs.search.brave.com/Z5Q-Bjeb6aYMFDG-R6kiNQKirzDwDG34YBK9x0fqh9w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFdHdr/b09oc0EvMS8wLzE2/MDB3L2NhbnZhLXll/bGxvdy1hbmQtYmxh/Y2stZnVuLW1vZGVy/bi1yZXN0YXVyYW50/LWZvb2QtbG9nby1W/RUFveUpQMHU3QS5q/cGc"
        ></img>
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

const SearchContainer = () => {
  return (
    <div className="SearchContainer">
      <div className="SearchBar">
        <input
          type="text"
          className="textBox"
          placeholder="Type your fav dish🍽️"
        ></input>
      </div>
      <div className="SearchButton">
        <button>Click Here</button>
      </div>
    </div>
  );
};

const ResCards = () => {
  return (
    <div className="ResCard">
      <img
        className="ResImg"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/29/6f1b2b80-7894-43cc-b6b9-1fea11d6742a_93632c12-eb63-4890-9ad9-2e140ee4e98f.png"
      ></img>
      <p>Egg Roll🍳</p>
      <p>Biriyani, North Indian, Chinies🥠</p>
      <p>20 Min🕒</p>
      <p>4.4⭐</p>
    </div>
  );
};
const RestaurantContainer = () => {
  return (
    <div className="ResCards">
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
      <ResCards />
    </div>
  );
};

const AppLayOut = () => {
  return (
    <div>
      <HeaderComponent />
      <SearchContainer />
      <RestaurantContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
