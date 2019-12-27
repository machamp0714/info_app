import { connect } from "react-redux";
import { signup } from "../../actions/authActions";
import Signup from "../../components/Auth/Signup";

const mapStateToProps = state => ({
  headers: state.auth.headers,
  user: state.auth.user,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(signup(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
