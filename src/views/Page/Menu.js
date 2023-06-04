import React, { useEffect } from 'react'
import { BiInfoCircle } from "react-icons/bi";
import { BiIntersect } from "react-icons/bi";
import { BiFork } from "react-icons/bi";
import { BiCloudLightning } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { headerChange } from '../../store';

function Menu() {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);

  const handleClick = (key) => {
    dispatch(headerChange(key))
  }

  useEffect(() => {
  }, [header])

  return (
    <div className='menu'>
      <div onClick={() => handleClick(0)} className={`menu__item ${header.id === 0 ? 'menu__title__active' : ''}`}>
        <BiInfoCircle alt="Icon 1" className='menu__icon' />
        <h4 className='menu__title'>Country Information</h4>
      </div>
      <div onClick={() => handleClick(1)} className={`menu__item ${header.id === 1 ? 'menu__title__active' : ''}`}>
        <BiIntersect alt="Icon 2" className='menu__icon' />
        <h4 className='menu__title'>Integrated Food Security Phase Classification</h4>
      </div>
      <div onClick={() => handleClick(2)} className={`menu__item ${header.id === 2 ? 'menu__title__active' : ''}`}>
        <BiFork alt="Icon 3" className='menu__icon' />
        <h4 className='menu__title'>Food Consumption Score (FCP)</h4>
      </div>
      <div onClick={() => handleClick(3)} className={`menu__item ${header.id === 3 ? 'menu__title__active' : ''}`}>
        <BiCloudLightning alt="Icon 4" className='menu__icon' />
        <h4 className='menu__title'>Climate / Hazards</h4>
      </div>
    </div>
  )
}

export default Menu;