import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


//I get the resId as a argument from the RestaurantMenu component.
const useRestaurantMenu = (resID) => {
  // basically this hook will take a resID and return the restaurant menu by fetching  data from the API

  const [resInfo, setResInfo] = useState(null);


  //it will run after the body render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);

  };

  return resInfo;
};

export default useRestaurantMenu;
