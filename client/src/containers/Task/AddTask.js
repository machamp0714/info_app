import { createTask } from "../../actions/taskActions";
import AddTask from "../../components/Task/AddTask";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  createTask: (column_id, params) => dispatch(createTask(column_id, params))
});

export default connect(null, mapDispatchToProps)(AddTask);
