import { connect } from "react-redux";
import { signup, getOAuthUrl } from "../../actions/authActions";
import Signup from "../../components/Auth/Signup";

const mapStateToProps = state => ({
  headers: state.auth.headers,
  user: state.auth.user,
  loggedIn: state.auth.loggedIn,
  errors: state.auth.errors
});

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(signup(values)),
  getOAuthUrl: () => getOAuthUrl()
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
