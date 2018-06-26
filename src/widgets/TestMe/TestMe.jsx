// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from './Actions';

type Props = {
    testData: Object,
    actions: Object
};

export class TestMe extends React.PureComponent<Props> {
    componentDidMount = () => {
        const { actions } = this.props;
        actions.getData();
    }

    render = () => {
        const { title } = this.props.testData.data.data;
        return <div>{title}</div>;
    }
}

const mapStateToProps = (state: Object): Object => {
    return {
        testData: state.testData
    };
};

const mapDispatchToProps = (dispatch: Object): Object => {
    const actions = bindActionCreators(Actions, dispatch);
    return {
        actions
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TestMe);
