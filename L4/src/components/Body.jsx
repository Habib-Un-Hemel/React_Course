import ResturantCard from "./ResturantCard";
import restaurantListMock from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(restaurantListMock);

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
        {/* {restaurantList.map((restuarant) => (
          <ResturantCard key={restuarant.data.id} resData={restuarant} />
        ))} */}

        {/* <ResturantCard resData={restaurantList[0]} /> */}

        {restaurantList.map((restuarant) => (
          <ResturantCard key={restuarant.data.id} resData={restuarant} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
