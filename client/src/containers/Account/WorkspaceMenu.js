import { deleteWorkspace } from "../../actions/workspaceActions";
import WorkspaceMenu from "../../components/Account/WorkspaceMenu";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  deleteWorkspace: workspace_id => dispatch(deleteWorkspace(workspace_id))
});

export default connect(null, mapDispatchToProps)(WorkspaceMenu);
