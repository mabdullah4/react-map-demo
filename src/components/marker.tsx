import * as React from "react";
import { IVehicle } from "../model/IVehicle";
import Hint from "./hint";

export interface MarkerProps {
    vehicle: IVehicle;
    lat: number;
    lng: number;
    isActive: boolean;
    handleHover: Function;
}

const Marker: React.SFC<MarkerProps> = ({ vehicle, isActive = false, handleHover }) => {
    const [isVehicleActive, setIsVehicleActive] = React.useState(false);
    return (
        <div
            className={`pointer  ${isActive ? "active" : ""}`}
            onClick={() => setIsVehicleActive(!isVehicleActive)}
            onMouseOut={() => handleHover(-1)}
            onMouseOver={() => handleHover(vehicle.id)}
        >
            <div className="map-vehicle__item">
                <div className="item__wrapper">{vehicle.vehicle_id}</div>
                <Hint isVehicleActive={isVehicleActive} vehicle={vehicle} />
            </div>
        </div>
    );
};

export default Marker;