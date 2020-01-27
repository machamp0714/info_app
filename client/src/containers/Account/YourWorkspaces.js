import { getWorkspaces, deleteWorkspace } from "../../actions/workspaceActions";
import { connect } from "react-redux";
import YourWorkspaces from "../../components/Account/YourWorkspaces";

const mapStateToProps = state => ({
  workspaces: state.workspace.workspaces
});

const mapDispatchToProps = dispatch => ({
  getWorkspaces: () => dispatch(getWorkspaces()),
  deleteWorkspace: workspace_id => dispatch(deleteWorkspace(workspace_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(YourWorkspaces);
