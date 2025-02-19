import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
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
    <div className="menu bg-gray-100 border-2 m-5  rounded-2xl">
      <div className="p-5 rounded-t-2xl bg-gray-400">
        <h1 className="font-bold text-3xl flex justify-center ">{name}</h1>
        <h3 className="flex justify-center"> {cuisines.join("; ")}</h3>
        <h3 className="flex justify-center"> {costForTwoMessage}</h3>
      </div>

      <h4 className="text-xl font-bold flex justify-center">Menu List:</h4>
      <ul className="pl-70">
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
