const Filters = ({ filters, setFilters }) => {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white shadow rounded-xl p-5 mb-8 grid md:grid-cols-4 gap-4">

      <input
        type="text"
        placeholder="Search city..."
        name="city"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <select
        name="type"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Property Type</option>
        <option>Apartment</option>
        <option>Villa</option>
      </select>

      <select
        name="price"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Price Range</option>
        <option value="5000000">Below 50L</option>
        <option value="10000000">Below 1Cr</option>
      </select>

      <button
        className="bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Apply Filters
      </button>

    </div>
  );
};

export default Filters;