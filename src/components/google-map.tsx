import * as React from "react";
import GoogleMapReact from "google-map-react";
import ICoordinates from "../model/ICoordinate";
import { GOOGLE_MAP_KEY } from "../constant/constant";

export interface GoogleMapProps {
    children: React.ReactNode | React.ReactNode[];
    center: ICoordinates;
    zoom?: number;
}

const GoogleMap: React.SFC<GoogleMapProps> = ({ center, zoom = 4, children }) => {
    return (
        <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }} center={center} zoom={zoom}>
            {children}
        </GoogleMapReact>
    );
};

export default GoogleMap;
