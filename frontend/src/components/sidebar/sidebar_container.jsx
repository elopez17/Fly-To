import {connect} from 'react-redux';
import Sidebar from './sidebar';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);