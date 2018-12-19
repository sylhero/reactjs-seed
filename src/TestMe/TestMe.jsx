import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from './Actions';

export class TestMe extends React.PureComponent {
    componentDidMount = () => {
        const { actions } = this.props;
        actions.getData();
    }

    render = () => {
        const { title } = this.props.testData.data.data;
        return <div>{title}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        testData: state.testData
    };
};

const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators(Actions, dispatch);
    return {
        actions
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TestMe);
