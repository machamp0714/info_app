import { getWorkspaces } from "../../actions/workspaceActions";
import { connect } from "react-redux";
import YourWorkspaces from "../../components/Account/YourWorkspaces";

const mapStateToProps = state => ({
  workspaces: state.workspace.workspaces
});

const mapDispatchToProps = dispatch => ({
  getWorkspaces: () => dispatch(getWorkspaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(YourWorkspaces);
