import AddColumn from "../../components/Column/AddColumn";
import { createColumn } from "../../actions/columnAction";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  createColumn: (workspace_id, params) =>
    dispatch(createColumn(workspace_id, params))
});

export default connect(null, mapDispatchToProps)(AddColumn);
