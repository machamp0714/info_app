import { getWorkspaces } from "../../actions/workspaceActions";
import Dashboard from "../../components/Dashboard/Dashboard";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isLoading: state.workspace.isLoading,
  workspaces: state.workspace.workspaces
});

const mapDispatchToProps = dispatch => ({
  getWorkspaces: () => dispatch(getWorkspaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
