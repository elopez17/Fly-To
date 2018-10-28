import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SidebarContainer from '../sidebar/sidebar_container';
import SplashContainer from '../splash/splash_container';
import Loading from '../loading/loading';
import ReactLoading from "react-loading";
 

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch  (modal) {
        
        case 'sidebar':
            component = <div className="sidebar-container"><SidebarContainer /></div> 
            break;
        case 'splash':
            component = <div className="splash-container"><SplashContainer /></div>
            break;

        case 'loading':
            component = <div className="modal-loading"><ReactLoading type="spin" /></div>
            break;
        default:
            return null;
    };

    let componentToRender;
    if (modal === 'sidebar'){
        componentToRender = (<div className="modal-background clear-background" onClick={closeModal}>
            {component}
        </div>)
    } else {
        componentToRender = (<div className="modal-background black-background" onClick={closeModal}>
            {component}
        </div>)
    }

    return (
        <div>
            {componentToRender}
        </div>
      )
}


const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal,
        loading: state.ui.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 

    return {
        closeModal: () => {
            dispatch(closeModal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);


