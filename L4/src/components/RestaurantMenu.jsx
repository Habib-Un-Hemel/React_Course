import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/contants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resID } = useParams();
  console.log(resID);

  useEffect(() => {
    fetchMenu();
  }, []);

  //1013619
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER
    console.log(json);
    setresInfo(json.data);
  };

  //   const { name, city, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3> {cuisines.join("; ")}</h3>
      <h3> {costForTwoMessage}</h3>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Taka: "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
