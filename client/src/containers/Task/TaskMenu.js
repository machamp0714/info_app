import { deleteTask } from "../../actions/taskActions";
import TaskMenu from "../../components/Task/TaskMenu";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  deleteTask: task_id => dispatch(deleteTask(task_id))
});

export default connect(null, mapDispatchToProps)(TaskMenu);
