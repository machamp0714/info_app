import ColumnDetails from "../../components/Column/ColumnDetails";
import { editColumn, deleteColumn } from "../../actions/columnAction";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  deleteColumn: column_id => dispatch(deleteColumn(column_id)),
  editColumn: (column_id, params) => dispatch(editColumn(column_id, params))
});

export default connect(null, mapDispatchToProps)(ColumnDetails);
