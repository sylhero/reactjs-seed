// @flow strict

import React from 'react';

import {
    Form, Icon, Input, Button, Checkbox, Row, Col, Layout
} from 'antd';

import styles from './Login.scss';

export class Login extends React.PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render = () => {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className={styles.background} style={{height: '100vh'}}>
                <Row>
                    <Col span={6} offset={9}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }]
                                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }]
                                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="http://www.google.com">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                    Or
                                <a href="http://www.google.com">
                                    register now!
                                </a>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

const LoginFormWrap = Form.create({ name: 'login' })(Login);

export default LoginFormWrap;
