import React from 'react'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import { africa_shape } from '../Graphs/africa'

import 'leaflet/dist/leaflet.css'

const position = [1.9422957087636317, -27.91002939455943]

function Map({ onClick }) {
    return (
        <section className='map__container'>
            <MapContainer dragging={false} center={position} zoom={3} className='map' style={{ width: '100vw', height: '90vh' }} scrollWheelZoom={false} zoomControl={false}>
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/shagar49/clifkgrew003301qp62i773my/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2hhZ2FyNDkiLCJhIjoiY2xpZmI2ZjJiMGRzdzNrc2U1NGp3YmJiYSJ9.Egq0DyLMnUGTOgJyiqvZSw"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {africa_shape.features.map((country) => {
                    const coordinates = country.geometry.coordinates[0].map((item) => [item[1], item[0]]);
                    const {admin} = country.properties

                    return (
                        <Polygon
                            key={admin}
                            pathOptions={{
                                fillColor: 'rgb(24,140,179)',
                                fillOpacity: 0.7,
                                weight: 1,
                                opacity: 1,
                                dashArray: 0,
                                color: 'black',
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e) => {
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity: 5,
                                        weight: 1,
                                        dashArray: 0,
                                        color: 'black',
                                    })
                                },
                                mouseout: (e) => {
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillColor: 'rgb(24,140,179)',
                                        fillOpacity: 0.7,
                                        weight: 1,
                                        dashArray: 0,
                                        color: 'black',
                                    })
                                },
                                click: (e) => {
                                    onClick(admin)
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillColor: '#F09536',
                                        fillOpacity: 5,
                                        weight: 1,
                                        dashArray: 0,
                                        color: 'black',
                                    })
                                },
                            }}
                        >
                            <Tooltip sticky={true} className="map__tooltip" direction="top" offset={[1, 1]} >
                                {admin}
                            </Tooltip>
                        </Polygon>
                    )
                })}
            </MapContainer>
        </section>
    );
}

export default Map;