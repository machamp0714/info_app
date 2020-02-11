import { editWorkspace, deleteWorkspace } from "../../actions/workspaceActions";
import { connect } from "react-redux";
import WorkspaceMenu from "../../components/Workspace/WorkspaceMenu";

const mapDispatchToProps = dispatch => ({
  editWorkspace: (workspace_id, param) =>
    dispatch(editWorkspace(workspace_id, param)),
  deleteWorkspace: workspace_id => dispatch(deleteWorkspace(workspace_id))
});

export default connect(null, mapDispatchToProps)(WorkspaceMenu);
