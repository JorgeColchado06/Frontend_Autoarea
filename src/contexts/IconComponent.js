import React from 'react';
import {FaHeart } from 'react-icons/fa';

const IconComponent = ({ active }) => {
  return active ? <FaHeart className="text-red-500" /> : <FaStar className="text-yellow-500" />;
};

export default IconComponent;
