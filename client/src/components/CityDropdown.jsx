import React, { useState, useEffect } from 'react';

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';

const CityDropdown = ({ setSearchTerm, cities }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState('Location (any)');
  const setCityAndEmit = (city) => {
    setCity(city);
    setSearchTerm('city', city);
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{city}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {cities.map((city, index) => {
          return (
            <Menu.Item
              className="cursor-pointer hover:text-slate-700 transition"
              onClick={() => setCityAndEmit(city)}
              as="li"
              key={index}
            >
              {city}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CityDropdown;
