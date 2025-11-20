import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [resName, setresName] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const PROXY = "https://cors-anywhere.herokuapp.com/";
    const resMenu = await fetch(
      PROXY +
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=38634&catalog_qa=undefined&submitAction=ENTER"
    );
    const JSONData = await resMenu.json();

    console.log(JSONData);

    setresName(JSONData?.data);
  };
  return (
    <div>
      <p>
        {
          resName?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0]
            ?.card?.card?.info?.name
        }
      </p>
    </div>
  );
};
export default RestaurantMenu;
