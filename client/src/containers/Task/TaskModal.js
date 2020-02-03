import { editTask } from "../../actions/taskActions";
import TaskModal from "../../components/Task/TaskModal";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  editTask: (task_id, params) => dispatch(editTask(task_id, params))
});

export default connect(null, mapDispatchToProps)(TaskModal);
