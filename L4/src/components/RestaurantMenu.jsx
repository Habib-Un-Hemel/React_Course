import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";


const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

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
