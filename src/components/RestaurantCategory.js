import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="w-6/12 bg-gray-100 shadow-xl p-4 my-4 mx-auto">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className={`transform transition-transform duration-200 ${showItems ? "rotate-180" : ""}`}>
          🔽
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
