import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import RestaurantContainer from "./Components/RestaurantContainer";
const AppLayOut = () => {
  return (
    <div>
      <HeaderComponent />
      <RestaurantContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
