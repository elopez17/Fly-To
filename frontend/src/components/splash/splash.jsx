import React from 'react';

class Splash extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.openModal("splash");
    }

    render(){
        return <div className="splash-page splash-middle" onClick={e => e.stopPropagation()}>
            <div className="modal-child splash-page-container splash-page-child">
                <img className="modal logo" src="https://image.ibb.co/hOajVq/Logo3.png" alt="Fly-To" border="0" />
              <div className="modal title">Welcome to Fly-To</div>
              <div className="modal tagline">
                A budget oriented flight search forecast thats easy on the eyes, and the wallet.
              </div>
              <button className="modal-btn modal-btn-get-started" onClick={() => this.props.closeModal()}>
                Get Started
              </button>
            </div>
          </div>;
    }
}

export default Splash;