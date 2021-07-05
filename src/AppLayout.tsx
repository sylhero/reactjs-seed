import React from 'react';
import { Layout } from 'antd';
import MainContent from './MainContent';
import Background from './assets/img/background.jpg';

const AppLayout = (): React.ReactElement => {
    return (
        <Layout>
            <Layout>
                <Layout.Content>
                    <MainContent />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
