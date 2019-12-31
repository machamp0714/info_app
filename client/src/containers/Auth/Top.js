import { connect } from "react-redux";
import { signup, getOAuthUrl } from "../../actions/authActions";
import Top from "../../components/Dashboard/Top";

const mapStateToProps = state => ({
  headers: state.auth.headers,
  user: state.auth.user,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(signup(values)),
  getOAuthUrl: () => getOAuthUrl()
});

export default connect(mapStateToProps, mapDispatchToProps)(Top);
