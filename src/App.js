import React, { useState, useEffect } from 'react';
import Map from './views/Page/Map';
import './styles/Main.scss';
import Header from './views/Page/Header';
import Menu from './views/Page/Menu';
import Dashboard from './views/Page/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { changeCountry } from './store';


function App() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  const handleCountryChange = (selectedCountry) => {
    dispatch(changeCountry(selectedCountry))
  };

  useEffect(() => {

  }, [country]);

  return (
    <div className="app">
      <header className='app__header'>
        <Header />
      </header>
      <main className='app__content'>
        <nav className='app__menu'>
          <Menu />
        </nav>
        <main className='app__dashboard'>
          <Dashboard country={country.id} />
        </main>
        <main className='app__map'>
          <Map onClick={handleCountryChange} />
        </main>
      </main>
    </div>
  );
}

export default App;
