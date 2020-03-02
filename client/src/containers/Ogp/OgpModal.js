import { connect } from "react-redux";
import OgpModal from "../../components/Task/ogpModal";

const mapStateToProps = state => ({
  isLoading: state.ogp.isLoading,
  data: state.ogp.data,
  url: state.ogp.url
});

export default connect(mapStateToProps, null)(OgpModal);
