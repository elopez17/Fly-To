import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch  (modal) {
        case 'sidebar':
            component = <div></div> 
            break;
            
        default:
            return null;
    };
}

// let backGroudModal = "";
let childModalType = "";

// (modal === 'explore') ? backGroundModal = 'modal-clear-background' : backGroundModal = 'modal-background';
(modal === "explore") ? (childModalType = "modal-child-profile-dropdown") : (childModalType = "modal-child");


const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => {
            (dispatch(closeModal()))
            dispatch(clearErrors())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);


