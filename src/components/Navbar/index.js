import React from 'react';

import { AiOutlineDashboard } from "react-icons/ai";
import { GoListUnordered } from "react-icons/go"
import { MdOutlineLocalShipping } from "react-icons/md"
import { BsShare } from "react-icons/bs"
import { IoPricetag } from "react-icons/io5"

import './index.css'

const NavigationBar = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-ul'>
        <li><AiOutlineDashboard /> Dashboard</li>
        <li><IoPricetag /> Inventory</li>
        <li className='li-active' >< GoListUnordered/> Orders</li>
        <li><MdOutlineLocalShipping /> Shipping</li>
        <li><BsShare /> Channel</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
