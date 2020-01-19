import WorkspaceColumns from "../../components/Column/WorkspaceColumns";
import { getColumns } from "../../actions/columnAction";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  columns: state.column.columns
});

const mapDispatchToProps = dispatch => ({
  getColumns: workspace_id => dispatch(getColumns(workspace_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceColumns);
