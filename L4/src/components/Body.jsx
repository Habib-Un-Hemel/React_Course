import ResturantCard from "./ResturantCard";
// import restaurantListMock from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //step1: at first no data , then api is giving new data
  const [restaurantList, setrestaurantList] = useState([]);

  const [filteredResturant, setfilteredResturant] = useState([]);

  //step2
  const [searchText, setsearchText] = useState("");

  //it will run after the body render
  useEffect(() => {
    fetchData();
  }, []);

  //api gives us promises
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //we got JSon data from Api
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    // after getting data from API, we update the useState so at first shimmer happens then after getting data from api it reRender
    setrestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // optional chainning JS
    setfilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Offline</h1>;
  }


  
  //shimmer component (conditional rendering)
  if (restaurantList.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search food"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={(e) => {
              //search logic
              console.log(searchText);

              const filteredResturant = restaurantList.filter((resData) =>
                resData.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setfilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (resData) => resData.info.avgRating > 4.4
            );
            setfilteredResturant(filteredList);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>

      <div className="res-container">
        {filteredResturant.map((restuarant) => (
          <Link
            key={restuarant?.info.id}
            to={"/restaurants/" + restuarant?.info.id}
          >
            {/* {console.log("eafaf")}
            {console.log(restuarant.info.id)} */}
            <ResturantCard resData={restuarant} />
          </Link>
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
