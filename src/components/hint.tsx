import * as React from "react";
import { IVehicle } from "../model/IVehicle";

export interface HintProps {
    vehicle: IVehicle;
    isVehicleActive: boolean;
}

const Hint: React.SFC<HintProps> = ({ vehicle, isVehicleActive }) => {
    return (
        <div className="hint">
            <h5 className="hint__model">{vehicle.vehicle_model}</h5>
            <p className="hint__category">{vehicle.vehicle_category}</p>
            <i className={`show-more ${isVehicleActive ? "active" : ""}`}>Click to show more</i>
            <p className={`hint__description ${isVehicleActive ? "active" : ""}`}>{vehicle.vehicle_description}</p>
        </div>
    );
};

export default Hint;
