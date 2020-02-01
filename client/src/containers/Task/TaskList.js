import TaskList from "../../components/Task/TaskList";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  taskList: state.task.tasks
});

export default connect(mapStateToProps)(TaskList);
