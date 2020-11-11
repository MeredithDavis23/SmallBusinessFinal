import { connect } from 'react-redux'
import Listing from '../Components/Listing'
import { removeListing } from "../Redux/Actions";

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (index) => dispatch(removeListing(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Listing)