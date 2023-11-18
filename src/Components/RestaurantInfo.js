import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Star } from "../assets/Star.svg";
import { ReactComponent as Discount } from "../assets/Discount.svg";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

const RestaurantInfo = () => {
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const { resId } = useParams();
  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.restaurant_id === resId
  );

  return (
    <div>
      <div className="image-container relative">
        <img
          className="object-cover w-full"
          src={selectedRestaurant?.images[0]?.url}
          alt=""
        />
        <Draggable>
          <img
            width="300"
            height="31"
            src="https://i0.wp.com/fastor7.com/wp-content/uploads/2021/03/Fastor-7-1.png?fit=300%2C31&amp;ssl=1"
            alt=""
            className=" absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </Draggable>
      </div>
      <div className="px-7 py-5  rounded-t-3xl bg-white relative -top-10 ">
        <div className="flex justify-between ">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-black1">
              {" "}
              {selectedRestaurant?.restaurant_name}
            </h2>
            <p className="font-medium text-base text-grey2">
              {selectedRestaurant?.location?.location_locality},{" "}
              {selectedRestaurant?.location?.city_name}
            </p>
          </div>
          <span className="flex gap-x-2 items-center text-grey3 text-xs">
            <Star /> {selectedRestaurant?.rating?.restaurant_avg_rating}
          </span>
        </div>
        <div className="flex text-xs font-semibold gap-x-2 text-brownColor items-center mb-10">
          <Discount />4 Offers Trending
        </div>
        <p className="font-medium text-sm text-grey4 break-words">
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
