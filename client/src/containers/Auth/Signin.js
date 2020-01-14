import { signin, getOAuthUrl } from "../../actions/authActions";
import Signin from "../../components/Auth/Signin";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  user: state.auth.user,
  headers: state.auth.headers,
  loggedIn: state.auth.loggedIn,
  errors: state.auth.errors
});

const mapDispatchToProps = dispatch => ({
  signin: values => dispatch(signin(values)),
  getOAuthUrl: () => getOAuthUrl()
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
