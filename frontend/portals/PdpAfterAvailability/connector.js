import { connect } from 'react-redux';
import { getBestBeforeLines } from '../../variants/selectors';

/**
 * @param {Object} state state
 * @param {Object} props props
 * @returns {Object}
 */
const mapStateToProps = (state, { productId }) => ({
  bestBeforeLines: getBestBeforeLines(state, { productId }),
});

export default connect(mapStateToProps);
