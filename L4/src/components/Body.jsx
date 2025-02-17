import ResturantCard from "./ResturantCard";
import restaurantListMock from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(restaurantListMock);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    //we got JSon data from Api
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[3].card.card);
    // setrestaurantList(json.data.cards[3].card.card.info);
  };

//shimmer component (conditional rendering)
if(restaurantList.length==0){
  return(<Shimmer/>)
}

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4.4
            );
            setrestaurantList(filteredList);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>

      <div className="res-container">
        {restaurantList.map((restuarant) => (
          <ResturantCard key={restuarant.data.id} resData={restuarant} />
        ))}
        <ResturantCard resData={restaurantList[0]} />
        {restaurantList.map((restuarant) => (
          <ResturantCard key={restuarant.data.id} resData={restuarant} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
