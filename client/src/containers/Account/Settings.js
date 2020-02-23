import Settings from "../../components/Account/Settings";
import { getAuthorizeURL } from "../../actions/stockActions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  url: state.stock.url
});

const mapDispatchToProps = dispatch => ({
  getAuthorizeURL: () => dispatch(getAuthorizeURL())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
