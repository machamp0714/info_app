import { connect } from "react-redux";
import { signup } from "../../actions/authActions";
import Top from "../../components/Dashboard/Top";

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(signup(values))
});

export default connect(null, mapDispatchToProps)(Top);
