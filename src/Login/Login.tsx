import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Divider, Row, Col, notification } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import styles from './Login.scss';
import background from '../assets/img/pointer2.png';
import services from './Services';

const Login = (): React.ReactElement => {
    const history = useHistory();
    const { id } = useParams() as any;
    const [isRegister, setIsRegister] = useState(false);
    const onFinish = async (values: any) => {
        try {
            const result = isRegister
                ? await services.signup(values.username, values.password, values.activationCode, values.id)
                : await services.login(values.username, values.password, values.isHost ? 'host' : 'follower');
            localStorage.setItem('LUOBO_GAMES_KEY', result.data.token);
            if (values.isHost) {
                history.push(`/${id}/manage`);
            }
            history.push(`/${id}/`);
        } catch (error) {
            console.log(error);
            notification['error']({
                message: isRegister ? '注册失败' : '登录失败'
            });
        }
    };
    const registerClick = () => {
        setIsRegister(true);
    };
    const goBack = () => {
        setIsRegister(false);
    };
    return (
        <div>
            <Row>
                <Col offset={9}>
                    <img src={background} className={styles.image} alt="image" />
                </Col>
            </Row>
            <Form name="basic" onFinish={onFinish} className={styles.formWrap}>
                <Form.Item
                    label={isRegister ? '选个容易记住的用户名' : '你叫啥'}
                    name="username"
                    rules={[{ required: true, message: '此项不能为空!' }]}
                >
                    <Input size="large" />
                </Form.Item>

                <Form.Item
                    label={isRegister ? '选个此生不忘的密码' : '你密码多少'}
                    name="password"
                    rules={[{ required: true, message: '此项不能为空!' }]}
                >
                    <Input.Password size="large" />
                </Form.Item>

                {isRegister && (
                    <Form.Item label="注册ID" name="id" rules={[{ required: true, message: '此项不能为空!' }]}>
                        <Input size="large" />
                    </Form.Item>
                )}
                {isRegister && (
                    <Form.Item
                        label="激活码"
                        name="activationCode"
                        rules={[{ required: true, message: '此项不能为空!' }]}
                    >
                        <Input size="large" />
                    </Form.Item>
                )}
                <Row>
                    <Col span={12}>
                        <Form.Item name="isHost" valuePropName="checked">
                            <Checkbox>主播勾这里</Checkbox>
                        </Form.Item>
                    </Col>
                    {!isRegister && (
                        <Col span={12}>
                            <a className={styles.forgotPassword} href="">
                                密码忘了点我
                            </a>
                        </Col>
                    )}
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className={styles.submitButton}>
                        走起
                    </Button>
                    <Divider>{isRegister ? '或者' : '等！一！下！'}</Divider>
                    <Button className={styles.submitButton} onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? '回去登录' : '我还没有帐户...'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
