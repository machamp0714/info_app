import { createTask } from "../../actions/taskActions";
import { getOgp } from "../../actions/ogpActions";
import AddTask from "../../components/Task/AddTask";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isLoading: state.ogp.isLoading,
  data: state.ogp.data,
  url: state.ogp.url
});

const mapDispatchToProps = dispatch => ({
  createTask: (column_id, params) => dispatch(createTask(column_id, params)),
  getOgp: url => dispatch(getOgp(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
