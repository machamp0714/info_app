import { connect } from "react-redux";
import { signup } from "../../actions/authActions";
import Top from "../../components/Dashboard/Top";

const mapStateToProps = state => ({
  headers: state.auth.headers,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(signup(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Top);
