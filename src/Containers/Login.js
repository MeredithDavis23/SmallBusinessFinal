import { connect } from 'react-redux'
import Login from '../Components/Login'
import { userLogin } from '../Redux/Actions'


const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)