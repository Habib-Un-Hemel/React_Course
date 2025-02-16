import React from "react";
import ReactDOM from "react-dom/client";
/*
*Header
    - Logo
    - Nav Items
*Body
    - Search
    - ResturantContainer
        - Resturant Card
*Footer
    - Copyright
    - Links
    - Address
    - Contact
    
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.data.cloudinaryImageId}
      ></img>
      <div className="res-header">
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join("; ")}</h4>
        <h4>{resData.data.avgRating}</h4>
      </div>
    </div>
  );
};

const restaurantData = {
  type: "restaurant",
  // "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  data: {
    id: "379942",
    name: "Quick Combos@69",
    cloudinaryImageId: "wmwogy9v4yfcajr1rqap",
    locality: "Nandadham Industrial Estate",
    areaName: "Marol, Mumbai",
    costForTwo: "₹300 for two",
    cuisines: [
      "North Indian",
      "Thalis",
      "Indian",
      "Punjabi",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.2,
    parentId: "473204",
    avgRatingString: "4.2",
    totalRatingsString: "2.9K+",
    promoted: true,
    adTrackingId:
      "cid=25315394~p=0~adgrpid=25315394#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=379942~eid=31c8bde3-1077-44a6-9644-37a80ead1464~srvts=1739727795170~collid=83639",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 5.9,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "5.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-02-17 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    campaignId: "25315394",
  },
  analytics: {},
  cta: {
    link: "swiggy://menu?restaurant_id=379942&source=collection&query=Biryani",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  relevance: {
    type: "RELEVANCE_TYPE_ON_MENU_RETURN",
    sectionId: "MENU_RETURN_FOOD",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search the food</div>
      <div className="res-container">
        <ResturantCard resData={restaurantData} />
        <ResturantCard resData={restaurantData} />
        <ResturantCard resData={restaurantData} />
        {/* <ResturantCard resName="Sultan Dine" cusine="desi , briyani" />
        <ResturantCard resName="Kolapata" cusine="all desi item" />
        <ResturantCard resName="Nanna Briyani" cusine="briyani" />
        <ResturantCard resName="KFC" cusine="fastfood, Burger" /> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <ul>
          <li>Copyright</li>
          <li>Links</li>
          <li>Address </li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
