import RequiredSignin from "../../components/Auth/RequiredSignin";
import { getUser } from "../../actions/authActions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(RequiredSignin);
