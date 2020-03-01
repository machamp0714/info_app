import { connect } from "react-redux";
import OgpModal from "../../components/Task/ogpModal";

const mapStateToProps = state => ({
  isLoading: state.ogp.isLoading,
  data: state.ogp.data
});

export default connect(mapStateToProps, null)(OgpModal);
