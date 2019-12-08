import * as React from "react";
import { IVehicle } from "../model/IVehicle";

export interface VehicleItemProps {
    vehicle: IVehicle;
    handleHover: Function;
    isActive: boolean;
}

const VehicleItem: React.SFC<VehicleItemProps> = ({ isActive = false, vehicle, handleHover }) => {
    return (
        <article
            className={`vehicle__item ${isActive ? "active" : ""}`}
            onMouseEnter={() => handleHover(vehicle.id)}
            onMouseOut={() => handleHover(-1)}
        >
            <div className="vehicle__id">
                <span>{vehicle.vehicle_id}</span>
            </div>
            <div className="vehicle__info">
                <h5 className="vehicle__title">{vehicle.vehicle_model}</h5>
                <p className="vehicle__description">{vehicle.vehicle_description}</p>
            </div>
            <div className="vehicle__img">
                <img src={vehicle.vehicle_image} alt={vehicle.vehicle_model} />
            </div>
        </article>
    );
};

export default VehicleItem;
