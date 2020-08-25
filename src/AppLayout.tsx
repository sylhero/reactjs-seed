import React from 'react';
import { Layout } from 'antd';

import LeftSideBar from './LeftSideBar';
import MainContent from './MainContent';
import Header from './PageHeader';

const AppLayout = (): React.ReactElement => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout>
                <Layout.Content>
                    <MainContent />
                </Layout.Content>
                <Layout.Sider reverseArrow width="300">
                    <LeftSideBar />
                </Layout.Sider>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
