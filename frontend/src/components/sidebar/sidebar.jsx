import React from 'react';
import FlightShowContainer from '../flight/flight_show_container';

class Sidebar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hidden: true
        }
    }

    componentDidMount(){

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.setState({hidden: false})

            })

        })

    }

    render(){
        let hiddenClass = this.state.hidden ? "dontShow" : "show"

        return(
            <div className={"sidebar " +  hiddenClass}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                <FlightShowContainer />
                </div>
            </div>

        )
    }
}

export default Sidebar;