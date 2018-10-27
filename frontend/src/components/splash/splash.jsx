import React from 'react';
// import { openModal } from '../../actions/modal_actions';


class Splash extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.props.getAllGeo().then(() => console.log("FINISH CALLING GET ALL GEO"));
        this.props.getAllQuotes().then(()=> console.log("FINISH CALLING GET ALL QUOTES"))
            .then(() => this.props.getAllGeo());

        this.props.openModal("splash");

        // this.props.getAllGeo().then(() =>
        //     this.props.getAllQuotes()
        // );

    }

    render(){
        return (
             <div className="splash-page splash-middle" onClick={e => e.stopPropagation()}>
                <div className="modal-child splash-page-container splash-page-child">

                    <img className="modal logo"  src="https://preview.ibb.co/jOHzTA/Screen-Shot-2018-10-26-at-1-48-18-PM.png" alt="Screen-Shot-2018-10-26-at-1-48-18-PM" border="0" />

                    <div className="modal title">Welcome to Fly-To</div>
                    <div className="modal tagline">
                        A budget oriented flight search forecast with more words
                        to make you feel confident.
                    </div>
                    <button className="modal-btn modal-btn-get-started btn btn-primary" onClick={() => this.props.closeModal()}>
                        Get Started
                    </button>
                </div>
          </div>
        )
    }
}

export default Splash;