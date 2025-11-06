import resList from "../Utils/mockData";
import ResCards from "./ResCards";
import { useState } from "react";

const RestaurantContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div>
      <>
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
          <button
            onClick={() => {
              const filteredResList = listOfRestaurant.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfRestaurant(filteredResList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </>
      <div className="ResCards">
        {listOfRestaurant.map((res) => (
          <ResCards key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantContainer;
