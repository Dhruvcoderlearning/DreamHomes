const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Home
        </h1>

        <p className="text-lg opacity-90 mb-6">
          Discover the best properties at the best prices.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Explore Properties
        </button>

      </div>
    </div>
  );
};

export default Hero;