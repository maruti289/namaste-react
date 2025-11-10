import { CDN_URL } from "../Utils/Constants";
const ResCards = ({ resData }) => {
  const { name, cuisines, deliveryTime, cloudinaryImageId, avgRating, sla } =
    resData.data;

  return (
    <div className="ResCard">
      <img
        className="ResImg"
        alt="resImg"
        src={CDN_URL + cloudinaryImageId}
      ></img>

      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{sla.deliveryTime} Min</p>
      <p>{avgRating}</p>
    </div>
  );
};
export default ResCards;
