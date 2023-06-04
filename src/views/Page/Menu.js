import React, { useEffect } from 'react'
import { BiInfoCircle } from "react-icons/bi";
import { BiIntersect } from "react-icons/bi";
import { BiFork } from "react-icons/bi";
import { BiCloudLightning } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { headerChange } from '../../store';

// import PieChart from '../Graphs/PieChart';


function Menu() {
  const dispatch = useDispatch()
  const header = useSelector((state) => state.header);
  const handleClick = (key) => {
    dispatch(headerChange(key))
  }

  useEffect(() => {
  }, [header])

  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li onClick={() => handleClick(0)} className={`menu__item ${header.id === 0 ? 'menu__title__active' : ''}`}>
          <BiInfoCircle alt="Icon 1" className='menu__icon' />
          <span>Country Information</span>
        </li>
        <li onClick={() => handleClick(1)} className={`menu__item ${header.id === 1 ? 'menu__title__active' : ''}`}>
          <BiIntersect alt="Icon 2" className='menu__icon' />
          <span>Integrated Food Security Phase Classification</span>
        </li>
        <li onClick={() => handleClick(2)} className={`menu__item ${header.id === 2 ? 'menu__title__active' : ''}`}>
          <BiFork alt="Icon 3" className='menu__icon' />
          <span>Food Consumption Score (FCP)</span>
        </li>
        <li onClick={() => handleClick(3)} className={`menu__item ${header.id === 3 ? 'menu__title__active' : ''}`}>
          <BiCloudLightning alt="Icon 4" className='menu__icon' />
          <span>Climate / Hazards</span>
        </li>
      </ul>
      <div className='legend'>
        <span style={{ marginBottom: '10px' }}>Integrated Food Security Phase Classification</span>
        <div className='legend__container'>
          <div className="rectangle__container"><div className="rectangle" style={{ backgroundColor: '#22c1c3' }}></div><span>1 -2</span></div>
          <div className="rectangle__container"><div className="rectangle" style={{ backgroundColor: '#f9bc30' }}></div><span>3 - 4</span></div>
          <div className="rectangle__container"><div className="rectangle" style={{ backgroundColor: '#dd0a43' }}></div> <span>4 - 5</span></div>
        </div>
      </div>
    </nav>
  )
}

export default Menu;