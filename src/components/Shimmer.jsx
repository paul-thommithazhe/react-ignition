const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[300px] h-72 bg-gray-200 rounded-xl animate-pulse shadow-md"
          >
            <div className="h-36 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-2/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
