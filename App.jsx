import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="main-header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-logo-vector-design-template_600323-3904.jpg?semt=ais_hybrid"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li> About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Body

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
      />
      <h4>Meghana Foods</h4>
      <h5>Biriyani,Pasta,North Indian,Kebabs</h5>
      <h5>4 Stars</h5>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
