import React from 'react';
import { Menu, Row, Col } from 'antd';
import styles from './Header.scss';
import logo from '../assets/logo.png';


const Header = () => {
    return (
        <div>
            <Row className={styles.borderBottom}>
                <Col span={8}>
                    <img src={logo} alt="logo" className={styles.logo} />
                </Col>
                <Col offset={4} span={12}>
                    <Menu mode="horizontal" className={styles.menu}>
                        <Menu.Item key="news">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">News</a>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">About</a>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>);
};

export default Header;
