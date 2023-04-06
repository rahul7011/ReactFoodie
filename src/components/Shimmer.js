const Shimmer = () => {
  return (
    <div className="flex flex-wrap p-4">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-52 h-64 p-5 m-3 bg-gray-100 rounded-xl"></div>
        ))}
    </div>
  );
};

export default Shimmer;
