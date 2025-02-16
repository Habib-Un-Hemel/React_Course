import ResturantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";


 
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search the food</div>
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