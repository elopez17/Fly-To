import {connect} from 'react-redux';
import Splash from "./splash";
import Modal from '../modal/modal';
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchAllQuotes, fetchAllGeo, setOrigin, setResults } from '../../actions/flights_actions';

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        getAllQuotes: (filters) => dispatch(fetchAllQuotes(filters)),
        getAllGeo: () => dispatch(fetchAllGeo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
