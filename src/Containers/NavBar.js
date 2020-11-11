import { connect } from "react-redux";
import NavBar from "../Components/NavBar";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};



export default connect(mapStateToProps)(NavBar);