import ResturantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{console.log("button clicked")}}>Top Rated Restuarant</button>
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
