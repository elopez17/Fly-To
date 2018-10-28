import React from 'react';
// import { openModal } from '../../actions/modal_actions';


class Splash extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.props.getAllGeo().then(() => console.log("FINISH CALLING GET ALL GEO"));
        // this.props.getAllQuotes().then(() => console.log("Finish calling GET GEO"));
        // this.props.getAllQuotes().then(()=> console.log("FINISH CALLING GET ALL QUOTES"))
        //     .then(() => this.props.getAllGeo());

        this.props.openModal("splash");

        // this.props.getAllGeo().then(() =>
        //     this.props.getAllQuotes()
        // );

    }

    render(){
        return <div className="splash-page splash-middle" onClick={e => e.stopPropagation()}>
            <div className="modal-child splash-page-container splash-page-child">
              {/* <img className="modal logo" src="https://preview.ibb.co/jOHzTA/Screen-Shot-2018-10-26-at-1-48-18-PM.png" alt="Screen-Shot-2018-10-26-at-1-48-18-PM" border="0" /> */}
                <img className="modal logo" src="https://image.ibb.co/hOajVq/Logo3.png" alt="Fly-To" border="0" />
              <div className="modal title">Welcome to Fly-To</div>
              <div className="modal tagline">
                A budget oriented flight search forecast with more words
                to make you feel confident.
              </div>
              <button className="modal-btn modal-btn-get-started" onClick={() => this.props.closeModal()}>
                Get Started
              </button>
            </div>
            {/* <img className="cloud" src="https://images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=2880&h=1502&q=100&fm=webp" /> */}
            {/* <img className="cloud" src="https://preview.ibb.co/ezCmRV/Screen-Shot-2018-10-27-at-4-33-16-PM.png" /> */}
            {/* <a href="https://ibb.co/cSbD6V"><img src="https://preview.ibb.co/ezCmRV/Screen-Shot-2018-10-27-at-4-33-16-PM.png" alt="Screen-Shot-2018-10-27-at-4-33-16-PM" border="0"></a><br /><a target='_blank' href='https://statewideinventory.org/porsche-0-60-times'>panamera turbo 0 60</a><br /> */}
          </div>;
    }
}

export default Splash;