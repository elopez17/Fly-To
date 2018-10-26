import {connect} from 'react-redux';
import Map from './map';

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(null, mapDispatchToProps)(Map);