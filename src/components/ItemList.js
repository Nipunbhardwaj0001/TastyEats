import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));

  }
  return (
    <div>
      {items.map((item, index) => (
        <div key={`${item.card.info.id}-${index}`}  className="border-gray-300 border-b-2 p-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="flex items-baseline gap-2">
                  <span className="font-medium">{item.card.info.name}</span>
                  <span className="text-sm font-medium">{" "} - ₹{" "}{(item.card.info.price || item.card.info.defaultPrice) / 100}</span>
              </div>
                <p className="mt-1 text-sm text-gray-600 leading-snug">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 flex justify-end relative">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="rounded-lg object-cover w-24 h-24 shadow-sm"
                />
                <button
                  className="absolute bottom-2 right-2 px-3 py-1.5 bg-white border border-gray-300 
                            rounded-lg shadow-md text-green-600 font-semibold text-sm 
                            hover:bg-green-100 active:scale-95 transition-all duration-200"
                onClick={() => handleAddItem(item)}>
                  Add +
                </button>
              </div>
            </div>
      ))}
    </div>
  );
};

export default ItemList;
