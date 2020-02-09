import { createWorkspace } from "../../actions/workspaceActions";
import { connect } from "react-redux";
import WorkspaceItem from "../../components/Drawer/WorkspaceItem";

const mapDispatchToProps = dispatch => ({
  createWorkspace: param => dispatch(createWorkspace(param))
});

export default connect(null, mapDispatchToProps)(WorkspaceItem);
