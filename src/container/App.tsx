import * as React from "react";
import http from "../service/api";
import { IVehicle } from "../model/IVehicle";
import GoogleMap from "../components/google-map";
import Marker from "../components/marker";
import VehicleItem from "../components/vehicle-item";
import MapMarker from "./../assets/map-marker.png";

export interface MainProps {}

const UserMarker = ({ lat, lng, isLocationAllowed }: { lat: number; lng: number; isLocationAllowed: boolean }) => {
    return isLocationAllowed ? (
        <div className="pointer">
            <img className="user-marker" src={MapMarker} alt="User Location" />
        </div>
    ) : null;
};

const App: React.SFC<MainProps> = () => {
    const [vehicles, setVehicles] = React.useState<IVehicle[]>([]);
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const [activeClickIndex, setActiveClickIndex] = React.useState(-1);
    const [userCenterLocation, setUserCenterLocation] = React.useState({ lat: 52.369157, lng: 9.965539 });
    const [isLocationAllowed, setLocationAllowed] = React.useState(false);

    React.useEffect(() => {
        http().then(data => {
            setVehicles(data as IVehicle[]);
        });
        navigator.geolocation.getCurrentPosition(({ coords: { longitude, latitude } }) => {
            setUserCenterLocation({ lat: latitude, lng: longitude });
            setLocationAllowed(true);
        });
    }, []);

    const handleClick = (vehicleId: number) => {
        setActiveIndex(vehicleId);
        if (vehicleId !== activeClickIndex) {
            setActiveClickIndex(vehicleId);
        } else {
            setActiveClickIndex(-1);
        }
    };

    const handleHover = (vehicleId: number) => {
        setActiveIndex(vehicleId);
    };

    return (
        <main className="main">
            <section className="map-sec">
                <GoogleMap center={userCenterLocation}>
                    <UserMarker isLocationAllowed={isLocationAllowed} lat={userCenterLocation.lat} lng={userCenterLocation.lng} />
                    {vehicles.map(vehicle => {
                        return (
                            <Marker
                                handleHover={handleHover}
                                isActive={activeIndex === vehicle.id}
                                isClicked={activeClickIndex === vehicle.id}
                                lat={vehicle.latitude}
                                lng={vehicle.longitude}
                                key={vehicle.id}
                                vehicle={vehicle}
                            />
                        );
                    })}
                </GoogleMap>
            </section>
            <aside className="vehicles-list">
                {vehicles.map(vehicle => (
                    <VehicleItem
                        handleClick={handleClick}
                        isActive={vehicle.id === activeIndex}
                        key={vehicle.id}
                        handleHover={handleHover}
                        vehicle={vehicle}
                    />
                ))}
            </aside>
        </main>
    );
};

export default App;
