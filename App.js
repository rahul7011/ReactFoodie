import React from "react";
import ReactDom from "react-dom/client";

/*
Header
    -Logo(Title)
    Nav Items(rightSide)
    -Cart
Body
    -Search Bar
    -Restaurant List
        -Restraunt Cards
            -Image
            -Name
            -Rating
            -Cusines
Footer
    -links
    -Copyrights
*/
const Title = () => (
  <a href="/">
    <img src={require("./media/logo.png")} alt="MISSING JPG" className="logo" />
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// ===================Optional chaining (?.)
// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null, the expression short
// circuits and evaluates to undefined instead of throwing an error.

//Config Driven UI
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "336272",
      name: "Punjabi Angithi",
      uuid: "e96108ae-f4d4-41f8-aa8c-4652849356dc",
      city: "4",
      area: "Rohini",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "wynnlcwjqfltykkbuudv",
      cuisines: ["North Indian", "Chinese", "Punjabi", "Kebabs", "Tandoor"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "punjabi-angithi-rohini-rohini",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Shop No.31 & 32, Ground floor, CSC-6, Sector-16, Rohini, New Delho",
      locality: "Sector 16",
      parentId: 4464,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹150 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹150 off on orders above ₹499",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹150 off on orders above ₹499 | Use code SWIGGYHOLI",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹150 OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYHOLI",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹150 off on orders above ₹499 | Use code SWIGGYHOLI",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6054995~p=1~eid=00000186-c6ca-2a74-0946-e56c00810157",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "336272",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "240669",
      name: "Burger King",
      uuid: "e5f0a419-cd1e-4110-9db1-418319dd5134",
      city: "4",
      area: "Adarsh Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "tn2ctkkbb7g40oduwa5l",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "burger-king-adarsh-nagar-gtb-nagar",
        city: "delhi",
      },
      cityState: "4",
      address: "A-17, Upper Ground Floor, Adarsh Nagar, New Delhi 110034",
      locality: "Indira Nagar",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Get every item under 129",
        shortDescriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "240669",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "508851",
      name: "Pizza Hut",
      uuid: "f86e7562-5d33-42da-8741-1158829efe55",
      city: "4",
      area: "Azadpur",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "chijnq5wnvzigtlx7wvt",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "pizza-hut-adarsh-nagar-gtb-nagar",
        city: "delhi",
      },
      cityState: "4",
      address:
        "PIZZA HUT at Ground Floor, B-45, Rajan Babu Road, Adarsh Nagar, MODEL TOWN, North,Delhi, 110033",
      locality: "Rajan babu road",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "508851",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "305604",
      name: "The Lahore kitchen",
      uuid: "029d36f4-2261-4e71-9323-7eb4915ff4ec",
      city: "4",
      area: "Ashok vihar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ejabluwcbd1au17liadu",
      cuisines: ["Indian", "Chinese"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "the-lahore-kitchen-ashok-vihar-ashok-vihar",
        city: "delhi",
      },
      cityState: "4",
      address:
        " AB 2 Basement Dilkhush Complex,GT Road, Opposite Mehfil Banquet,Delhi 110009",
      locality: "2nd Phase",
      parentId: 210754,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6110046~p=4~eid=00000186-c6ca-2a74-0946-e56d00810426",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "305604",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "448378",
      name: "Paradise Pizza",
      uuid: "38d91806-619b-4215-85f6-37c3a8f32ec9",
      city: "4",
      area: "Shalimar Bagh",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "xyduemtn3xwzh7lpp5b4",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "paradise-pizza-gtb-nagar-gtb-nagar",
        city: "delhi",
      },
      cityState: "4",
      address:
        "A1 rajan babu road, opposite indian bank, adarsh nagar delhi 110033",
      locality: "Adarsh Nagar",
      parentId: 155132,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "448378",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "20046",
      name: "Everbake",
      uuid: "436906db-0372-4ef5-b0ba-5304342f5c8a",
      city: "4",
      area: "Ashok vihar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "au28pqexqycnlmskk8bl",
      cuisines: ["North Indian", "Snacks", "Desserts"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: "ever-bake-shalimar-bagh-nsp",
        city: "delhi",
      },
      cityState: "4",
      address: "BN-2, Central Market, Shalimar Bagh, New Delhi",
      locality: "Shalimar Bagh",
      parentId: 4772,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "20046",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  //   //More destructuring
  //   const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

//props - properties
const Body = () => (
  <div className="restaurant-list">
    {/* Usage of props and spread(JS) */}
    {
      //Usage of map is prefered in industry instead of loops or forEach
      restaurantList.map((restaurant) => {
        // Never use index as your key
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>;
      })
    }
  </div>
);
const Footer = () => <h4>Footer</h4>;
const AppLayout = () => {
  return (
    // React.fragement(Component that is exported by react)
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
