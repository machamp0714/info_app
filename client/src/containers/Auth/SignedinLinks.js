import { signout } from "../../actions/authActions";
import { connect } from "react-redux";
import SignedinLinks from "../../components/Layout/SignedinLinks";

const mapStateToProps = state => ({
  logout: state.auth.logout
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedinLinks);
