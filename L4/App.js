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

  //optional channing
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <div className="res-header">
        <h3>{name}</h3>
        <h4>{cuisines.join("; ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo + " Enjoy"}</h4>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
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
  },
  {
    type: "restaurant",
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    data: {
      id: "16640",
      name: "Behrouz Biryani",
      cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
      locality: "Kalina",
      areaName: "Santacruz East",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.4,
      parentId: "1803",
      avgRatingString: "4.4",
      totalRatingsString: "9.1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                  description: "Delivery!",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹899",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=16640&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    type: "restaurant",
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    data: {
      id: "997947",
      name: "Copper Chimney",
      cloudinaryImageId: "652209e2994e12045412779c654525bd",
      locality: "Gupte Mansion, Plot Number,266",
      areaName: "Bandra Linking Road",
      costForTwo: "₹900 for two",
      cuisines: ["Biryani", "Kebabs"],
      avgRating: 4.5,
      parentId: "65177",
      avgRatingString: "4.5",
      totalRatingsString: "40",
      promoted: true,
      adTrackingId:
        "cid=25267902~p=1~adgrpid=25267902#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=997947~eid=f133a5f8-e344-4f9e-a542-69515eb10592~srvts=1739727795170~collid=83639",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-17 00:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
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
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "25267902",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=997947&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  // Add more restaurant card objects here...
];

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search the food</div>
      <div className="res-container">
        {restaurantList.map((restuarant) => (
          <ResturantCard key={restuarant.data.id}  resData={restuarant} />
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
