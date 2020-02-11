import { getWorkspaces, createWorkspace } from "../../actions/workspaceActions";
import { connect } from "react-redux";
import WorkspaceItem from "../../components/Drawer/WorkspaceItem";

const mapStateToProps = state => ({
  workspaces: state.workspace.workspaces
});

const mapDispatchToProps = dispatch => ({
  getWorkspaces: () => dispatch(getWorkspaces()),
  createWorkspace: param => dispatch(createWorkspace(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceItem);
