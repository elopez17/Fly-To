import React from 'react';
import FlightShowContainer from '../flight/flight_show_container';

class Sidebar extends React.Component{

    render(){

        return(
            <div className="sidebar">
                <FlightShowContainer />
            </div>

        )
    }
}

export default Sidebar;