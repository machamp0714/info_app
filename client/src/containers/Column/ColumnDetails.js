import ColumnDetails from "../../components/Column/ColumnDetails";
import { deleteColumn } from "../../actions/columnAction";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  deleteColumn: column_id => dispatch(deleteColumn(column_id))
});

export default connect(null, mapDispatchToProps)(ColumnDetails);
