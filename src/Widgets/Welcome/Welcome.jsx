// @flow strict
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';
import Actions from './Actions';


type Props = {
    username: string,
    actions: any,
    testData: any
};

const Welcome = (props: Props) => {
    useEffect(
        () => {
            props.actions.getData();
        }, []
    );
    const { title } = props.testData.data.data;
    return (
        <div>
            <Icon type="smile-o" />
            <h1>
                {title}
            </h1>
            <h1>
                {props.username}
            </h1>
            <Button type="primary" onClick={props.actions.updateData}>Primary</Button>
        </div>
    );
};

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


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
