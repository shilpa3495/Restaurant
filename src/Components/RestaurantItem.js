import { ReactComponent as Dollar } from "../assets/Vectordollar.svg";
import { ReactComponent as Star } from "../assets/Vectorstar.svg";
import { ReactComponent as Discount } from "../assets/Discount.svg";
import { Link } from "react-router-dom";

const RestaurantItem = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.restaurant_id}`}> <div className="flex gap-x-3 cursor-pointer">
      <img
        className="object-cover w-32 h-32 rounded-xl"
        src={restaurant?.images[0]?.url}
        alt=""
      />
      <div className="bg-white restaurant-item">
        <div className="flex justify-between ">
          <div className="mb-2">
            <h2 className="text-md font-bold text-black1">
              {restaurant?.restaurant_name}
            </h2>
            <p className="font-medium text-xs text-grey1 ">
              {restaurant?.location?.location_locality},{" "}
              {restaurant?.location?.city_name}
            </p>
            <p className="font-medium text-xs text-grey1 line-clamp-1">
              {restaurant?.cuisines.map((cuisine) => {
                return <span key={cuisine.cuisine_id}>{cuisine.cuisine_name}, </span>;
              })}
            </p>
          </div>
        </div>
        <div className="flex text-xs font-semibold gap-x-2 text-brownColor items-center mb-3">
          <Discount />4 Offers Trending
        </div>
        <div className="flex justify-between">
          <div>
            <span className="flex gap-x-2 items-center text-black font-bold text-xs">
              <Star className="w-3 h-3" />{" "}
              {restaurant?.rating?.restaurant_avg_rating}
            </span>

            <span className="text-grey2 text-xs">Popularity</span>
          </div>
          <div>
            <span className="flex gap-x-2 items-center text-black text-xs font-bold">
              <Dollar className="w-3 h-3" /> {restaurant?.avg_cost_for_two}
            </span>
            <span className="text-grey2 text-xs">Cost for two</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default RestaurantItem;
