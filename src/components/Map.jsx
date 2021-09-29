import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'

export const MapW = ({coordinates}) => {
    return (
        <div className="map">
            <Map center={coordinates} zoom={12}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={coordinates}></Marker>
            </Map>
        </div>
    )
}
