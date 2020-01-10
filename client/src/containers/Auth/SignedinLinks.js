import { signout } from "../../actions/authActions";
import { connect } from "react-redux";
import SignedinLinks from "../../components/Layout/SignedinLinks";

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedinLinks);
