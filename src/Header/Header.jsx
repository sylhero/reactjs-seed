import React from 'react';
import { Menu, Row, Col } from 'antd';
import { Link, Route } from 'react-router-dom';
import Blogs from '../Blogs';
import styles from './Header.scss';
import logo from '../assets/logo.png';


const Header = () => {
    return (
        <div>
            <Row className={styles.borderBottom}>
                <Col span={8}>
                    <img src={logo} alt="logo" className={styles.logo} />
                </Col>
                <Col offset={10} span={6}>
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
            <Route path="/blogs" component={Blogs} />
        </div>);
};

export default Header;
