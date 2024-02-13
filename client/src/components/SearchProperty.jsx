import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CityDropdown from './CityDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';

import { FaSearch } from 'react-icons/fa';

// https://www.youtube.com/watch?v=CHe_QJcTK5Y
const SearchProperty = ({ saleListings }) => {
  const [city, setCity] = useState();
  const navigate = useNavigate();

  console.log(saleListings);
  const cities = saleListings.map((house) => {
    console.log(house.city);
    return house.city;
  });

  const uniqueCities = ['Location (any)', ...new Set(cities)];
  console.log(uniqueCities);
  const handleClick = () => {
    const params = new URLSearchParams();
    if (city) {
      params.append('city', city);
    }
    const searchQuery = params.toString();

    navigate(`/search?${searchQuery}`);
  };

  const setSearchTerm = (property, value) => {
    switch (property) {
      case 'city':
        if (value === 'Location (any)') {
          setCity(null);
        } else {
          setCity(value);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white  lg:backdrop-blur rounded-lg">
      <CityDropdown setSearchTerm={setSearchTerm} cities={uniqueCities} />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={handleClick}
        className="bg-slate-700 hover:bg-slate-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchProperty;
