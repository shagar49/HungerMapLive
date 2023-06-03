import React, { useState } from 'react'
import Population from '../Component/Population'
import {useFetchInfoQuery} from '../../store'

function Dashboard({ active, country }) {
       const { data, error, isLoading } = useFetchInfoQuery();

    let info;

    if (isLoading) {
        info = <h4>Info : Loading ...</h4>
    } else if (error) {
        info = <h4>Total Population Count : Not Found</h4>
    } else {
        const result = data.countries.filter(x => x.country.name == country);
        console.log(result[0])
    }

    return (
        <div className='board__container'>
            <h3>{country || 'Dashboard'}</h3>
            <div className='board__population'>
                {active && <Population country={country} />}
            </div>
        </div>
    )
}

export default Dashboard