import React, { useEffect } from "react";
import RestaurantItem from "./RestaurantItem";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurant } from "../utils/restaurantSlice";

const Restaurant = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.restaurants.restaurants);
  const loading = useSelector((state) => state.restaurants.loading);
  const error = useSelector((state) => state.restaurants.error);

  useEffect(() => {
    dispatch(getRestaurant(118));
  }, [dispatch]);

  if (error !== null) return <h2>{error}</h2>;

  return (
    <div className="mt-9">
      <h2 className="text-lg font-bold text-black1 pb-4">Nearby Restaurants</h2>
      {loading ? (
        <p>Loading...</p> // Render a loader while loading
      ) : (
        <div className="flex flex-col gap-y-9">
          {data.length > 0 &&
            data.map((restaurant) => (
              <RestaurantItem
                restaurant={restaurant}
                key={restaurant.restaurant_id}
              />
            ))}
        </div>
        // Render RestaurantItem if data is available
      )}
    </div>
  );
};

export default Restaurant;
