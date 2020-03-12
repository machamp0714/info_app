import { editTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import TaskDetails from "../../components/Task/TaskDetails";

const mapDispatchToProps = dispatch => ({
  editTask: (task_id, params) => dispatch(editTask(task_id, params))
});

export default connect(null, mapDispatchToProps)(TaskDetails);
