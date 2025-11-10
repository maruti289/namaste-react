import resList from "../Utils/mockData";
import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
const RestaurantContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=11.9538348&lng=79.837096&str=Moghal%20Biryani&trackingId=d42ee755-d297-e946-a708-d2b63fdd6953&submitAction=ENTER&queryUniqueId=cc682121-4a13-b49c-fcf6-d0dc0ebd5c6d"
    );
    const jsonData = await data.json();

    console.log(jsonData);

    const apiResList =
      jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards ||
      [];
    // The API response from Swiggy contains restaurant data in a deeply nested format like:
    // jsonData.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
    // → which gives an array of 87 restaurant objects.
    // Each restaurant object looks like: { card: { card: { info: { ...restaurantDetails } } } }
    //
    // So here, we are normalizing (flattening) the data structure.
    // For every restaurant in that array, we extract only the useful `info` object (which contains name, cuisines, rating, etc.)
    // and wrap it inside a new object as `data`, to maintain consistency with our mockData structure.
    // This makes it easy to render in the UI using <ResCard resData={res.data} />.
    const normalizedList = apiResList.map((res) => ({
      data: res.card?.card?.info,
    }));

    setListOfRestaurant(normalizedList);

    if (listOfRestaurant.length === 0) {
      return <Shimer />;
    }
  };
  return (
    <div>
      <>
        <div className="SearchContainer">
          <div className="SearchBar">
            <input
              type="text"
              className="textBox"
              placeholder="Type your fav dish🍽️"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
          </div>
          <div className="SearchButton">
            <button
              onClick={() => {
                const listOfFilteredRestaurant = listOfRestaurant.filter(
                  (res) =>
                    res.data.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                );
                setListOfRestaurant(listOfFilteredRestaurant);
              }}
            >
              Click Here
            </button>
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
