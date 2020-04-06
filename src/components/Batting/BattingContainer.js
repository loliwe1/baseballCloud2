import { connect } from 'react-redux';
import Batting from './Batting';

const mapStateToProps = (state) => ({
  topValues: state.battingSummary.top_values,
  avgValues: state.battingSummary.average_values,
});

export default connect(mapStateToProps)(Batting);
