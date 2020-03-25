import DrawerStocks from "../../components/Drawer/DrawerStocks";
import { getStocks } from "../../actions/stockActions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isLoading: state.stock.isLoading,
  stocks: state.stock.stocks,
  pagination: state.stock.pagination
});

const mapDispatchToProps = dispatch => ({
  getStocks: () => dispatch(getStocks())
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerStocks);
