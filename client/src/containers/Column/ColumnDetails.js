import ColumnDetails from "../../components/Column/ColumnDetails";
import { getTasks } from "../../actions/taskActions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  tasks: state.task.tasks
});

const mapDispatchToProps = dispatch => ({
  getTasks: column_id => dispatch(getTasks(column_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnDetails);
