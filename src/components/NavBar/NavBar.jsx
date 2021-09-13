import React from 'react';
import HotelIcon from '@material-ui/icons/Hotel';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ExploreIcon from '@material-ui/icons/Explore';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import NavLink from '../NavLink/NavLink';

const NavBar = () => (
  <div className="navbar container">

    <NavLink href="#">
      <HotelIcon />
      Hoteles
    </NavLink>
    <NavLink href="#">
      <FlightTakeoffIcon />
      Vuelos
    </NavLink>
    <NavLink href="#">
      <ExploreIcon />
      Tours
    </NavLink>
    <NavLink href="#">
      <AirportShuttleIcon />
      Traslados
    </NavLink>

  </div>
);

export default NavBar;
