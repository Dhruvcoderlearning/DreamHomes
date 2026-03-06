import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const PropertyCard = ({ property, onEnquire }) => {

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition"
    >

      <div className="relative">

        <img
          src={property.image}
          loading="lazy"
          className="h-56 w-full object-cover"
        />

        {/* Price Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
          ₹ {property.price.toLocaleString()}
        </span>

        {/* Favourite */}
        <Heart className="absolute top-3 right-3 bg-white p-1 rounded-full shadow cursor-pointer hover:text-red-500"/>

      </div>

      <div className="p-4">

        <h3 className="font-semibold text-lg mb-1">
          {property.title}
        </h3>

        <p className="text-gray-500 text-sm mb-3">
          📍 {property.city}
        </p>

        <div className="flex justify-between text-sm text-gray-600 mb-4">

          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.area} sqft</span>

        </div>

        <button
          onClick={onEnquire}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          Enquire Now
        </button>

      </div>

    </motion.div>
  );
};

export default PropertyCard;