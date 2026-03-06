import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import Filters from "../components/Filters";
import SkeletonCard from "../components/SkeletonCard";
import EnquiryModal from "../components/EnquiryModel";
import propertiesData from "../data/properties";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProperties(propertiesData);
      setLoading(false);
    }, 1200);
  }, []);

  const filtered = properties.filter((p) => {
    if (filters.city && !p.city.toLowerCase().includes(filters.city.toLowerCase()))
      return false;

    if (filters.type && p.type !== filters.type)
      return false;

    if (filters.price && p.price > filters.price)
      return false;

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Find Your Dream Property
      </h1>

      <Filters filters={filters} setFilters={setFilters} />

      <div className="grid md:grid-cols-3 gap-6">

        {loading
          ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onEnquire={() => setSelected(property)}
              />
            ))}
      </div>

      {selected && (
        <EnquiryModal
          property={selected}
          close={() => setSelected(null)}
        />
      )}

    </div>
  );
};

export default PropertyListing;