import { CDN_URL } from "../utils/contants";


const ResturantCard = (props) => {
  const { resData } = props;

  //optional channing
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src= {CDN_URL + cloudinaryImageId}
        
      ></img>
      <div className="res-header">
        <h3>{name}</h3>
        <h4>{cuisines.join("; ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo + " Enjoy"}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;