const Shimmer = ({ count = 20 }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {Array(count).fill("").map((_, index) => (
        <div
          key={index}
          className="w-[250px] h-[300px] bg-gray-200 rounded-2xl animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
