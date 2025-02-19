import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  //optional channing
  const { cloudinaryImageId, sla, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100  border h-120  rounded-lg hover:bg-gray-200 ">
      <img
        className="res-logo h-50 "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="res-header ">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join("; ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo + " Enjoy"}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
