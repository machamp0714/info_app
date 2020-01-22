import WorkspaceColumns from "../../components/Column/WorkspaceColumns";
import { getColumns, createColumn } from "../../actions/columnAction";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  columns: state.column.columns
});

const mapDispatchToProps = dispatch => ({
  getColumns: workspace_id => dispatch(getColumns(workspace_id)),
  createColumn: (workspace_id, params) =>
    dispatch(createColumn(workspace_id, params))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceColumns);
