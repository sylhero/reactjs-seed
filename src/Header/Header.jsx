import React from 'react';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import styles from './Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div>
            <Row className={styles.borderBottom}>
                <Col md={{ span: 8 }} sm={{span: 6}}>
                    <img src={logo} alt="logo" className={styles.logo} />
                </Col>
                <Col md={{ span: 8, offset: 8 }} sm={{ span: 12, offset: 6 }}>
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
                    </Menu>
                </Col>
            </Row>
        </div>);
};

export default Header;
