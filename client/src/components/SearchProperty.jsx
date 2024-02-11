import React from "react";

import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";

import { FaSearch } from "react-icons/fa";
const SearchProperty = ({ saleListings }) => {
  const countries = saleListings.map((house) => {
    return house.city;
  });
  
  const uniqueCountries = ['Location (any)', ...new Set(countries)];
  
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white  lg:backdrop-blur rounded-lg">
      <CountryDropdown countries={uniqueCountries} />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button className="bg-slate-700 hover:bg-slate-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchProperty;
