import { connect } from 'react-redux';

import Link from '../component/Link';
import actionCreators from '../action/index';

const mapStateToLinkProps = (
  state,
  ownProps,
) => ({
  active:
    ownProps.filter === state.visibilityFilter,
});

const mapDispatchToLinkProps = (
  dispatch,
  ownProps,
) => ({
  onClick: () => {
    dispatch(actionCreators.app.todo.setVisibilityFilter({ filter: ownProps.filter }));
  },
});

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps,
)(Link);

export default FilterLink;
