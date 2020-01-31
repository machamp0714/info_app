import { editWorkspace, deleteWorkspace } from "../../actions/workspaceActions";
import WorkspaceMenu from "../../components/Account/WorkspaceMenu";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  editWorkspace: (workspace_id, params) =>
    dispatch(editWorkspace(workspace_id, params)),
  deleteWorkspace: workspace_id => dispatch(deleteWorkspace(workspace_id))
});

export default connect(null, mapDispatchToProps)(WorkspaceMenu);
