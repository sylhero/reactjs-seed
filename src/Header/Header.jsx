import React from 'react';
import { Menu, Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <Row className={styles.borderBottom}>
                <Col md={{ span: 8 }} sm={{span: 6}}>
                    <img src={logo} alt="logo" className={styles.logo} />
                </Col>
                <Col md={{ span: 10, offset: 6 }} sm={{ span: 14, offset: 4 }}>
                    <Menu mode="horizontal" className={styles.menu}>
                        <Menu.Item key="news">
                            <Link to="/">News</Link>
                        </Menu.Item>
                        <Menu.Item key="blogs">
                            <Link to="/blogs">Blogs</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">About </Link>
                        </Menu.Item>
                        <Menu.Item key="preference">
                            <Link to="/preference"><Icon type="setting" /></Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>);
};

export default Header;
