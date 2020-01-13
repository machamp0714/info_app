import { createWorkspace } from "../../actions/workspaceActions";
import CreateWorkspace from "../../components/Workspace/CreateWorkspace";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  errors: state.workspace.errors
});

const mapDispatchToProps = dispatch => ({
  createWorkspace: name => dispatch(createWorkspace(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkspace);
