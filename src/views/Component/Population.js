import React from 'react'
import { useFetchIPCQuery } from '../../store'
import { Bump } from '../Graphs/Bump';

function Population({ country }) {

    const { data, error, isLoading } = useFetchIPCQuery();

    let population;

    if (isLoading) {
        population = <h4>Total Population Count : Loading ...</h4>
    } else if (error) {
        population = <h4>Total Population Count : Not Found</h4>
    } else {
        const result = data.ipc_peaks.filter(x => x.country_name == country);
        const populationCount = result.length > 0 ? (result[0].analyzed_population_number / 1000000).toFixed(2) + 'M' : 'N/A';
        population = (<><h4>Total Population Count : {populationCount}</h4>

        </>)

    }

    return (
        <>
            {population}
        </>
    )
}

export default Population