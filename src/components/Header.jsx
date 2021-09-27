import React from 'react'
import { Link } from "react-router-dom";


const Header = ({data}) => {

    let renderHotelDestinations = "";

    renderHotelDestinations = data.length ? (
        data.map((hotelDestination, i) => {
        return (
          <li key={i} className="dropdown-submenu">
            <p className="dropdown-item dropdown-toggle">
              {hotelDestination.countryName}
            </p>
            <ul className="dropdown-menu">
              {hotelDestination.destinations.map((destination, index) => (
                <Link
                  key={index}
                  className="dropdown-item"
                  to={`/destination/${hotelDestination.countryName}/${destination}`}
                >
                  {destination}
                </Link>
              ))}
            </ul>
          </li>
        );
      })
    ) : (
      <div className="error">Loading...</div>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
  
          <Link className="navbar-brand" to="/"><img
            src="https://assets.sunwingtravelgroup.com/image/upload/v1614627905/sunwing-prod/Web%20Replatform%20Project/Logos/SunwingLogos/NewSunwingLogo-white.svg"
            alt="logo"
          />
        </Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle mb-0 text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Destinations
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                {renderHotelDestinations}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header
