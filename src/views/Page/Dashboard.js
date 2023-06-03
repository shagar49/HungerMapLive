import React, { useState } from 'react'
import Population from '../Component/Population'
import { useFetchInfoQuery } from '../../store'
import BarGraph from '../Graphs/BarGraph';


function Dashboard({ active, country }) {
    const { data, error, isLoading } = useFetchInfoQuery();

    let info;

    if (isLoading) {
        info = <h4>Info : Loading ...</h4>
    } else if (error) {
        info = <h4>Total Population Count : Not Found</h4>
    } else {
        const result = data.countries.filter(x => x.country.name == country);
        info = <BarGraph data={result[0].malnutrition} />
        console.log(result[0].malnutrition)
    }

    return (
        <div className='board__container'>
            <h3>{country || 'Dashboard'}</h3>
            <div className='board__graph'>{info}</div>
            <div className='board__population'>
                {active && <Population country={country} />}
            </div>
        </div>
    )
}

export default Dashboard