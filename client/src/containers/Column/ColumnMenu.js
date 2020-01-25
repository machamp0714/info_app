import { editColumn, deleteColumn } from "../../actions/columnAction";
import { connect } from "react-redux";
import ColumnMenu from "../../components/Column/ColumnMenu";

const mapDispatchToProps = dispatch => ({
  deleteColumn: column_id => dispatch(deleteColumn(column_id)),
  editColumn: (column_id, params) => dispatch(editColumn(column_id, params))
});

export default connect(null, mapDispatchToProps)(ColumnMenu);
