import { createWorkspace } from "../../actions/workspaceActions";
import SearchSubmit from "../../components/Form/SearchSubmit";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  createWorkspace: name => dispatch(createWorkspace(name))
});

export default connect(null, mapDispatchToProps)(SearchSubmit);
