import React from 'react';
import { Layout } from 'antd';

import LeftSideBar from './LeftSideBar';
import MainContent from './MainContent';
import Header from './PageHeader';
//import Background from './assets/img/background.jpg';

const AppLayout = (): React.ReactElement => {
    return (
        <Layout style={{ minHeight: '100vh', backgroundImage: 'url("./assets/img/background.jpg")' }}>
            <Layout>
                <Layout.Content>
                    <MainContent />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
