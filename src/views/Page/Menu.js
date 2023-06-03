import React from 'react'
import { BiInfoCircle } from "react-icons/bi";
import { BiIntersect } from "react-icons/bi";
import { BiFork } from "react-icons/bi";
import { BiCloudLightning } from "react-icons/bi";

function Menu() {
    return (
<div className='menu'>
  <div className='menu__item menu__title__active'>
    <BiInfoCircle alt="Icon 1" className='menu__icon'/>
    <h4 className='menu__title'>Country Information</h4>
  </div>
  <div className='menu__item'>
    <BiIntersect alt="Icon 2" className='menu__icon'/>
    <h4 className='menu__title'>Integrated Food Security Phase Classification</h4>
  </div>
  <div className='menu__item'>
    <BiFork alt="Icon 3" className='menu__icon'/>
    <h4 className='menu__title'>Food Consumption Score (FCP)</h4>
  </div>
  <div className='menu__item'>
    <BiCloudLightning alt="Icon 4" className='menu__icon'/>
        <h4 className='menu__title'>Climate / Hazards</h4>
  </div>
</div>
    )
}

export default Menu;