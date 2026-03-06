const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white p-4 rounded-xl shadow">
      <div className="bg-gray-300 h-48 rounded"></div>

      <div className="mt-4 space-y-2">
        <div className="bg-gray-300 h-4 w-3/4"></div>
        <div className="bg-gray-300 h-4 w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;