import { setVisibilityFilter } from '../../modules/todos/action';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

export default (Container) => connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
