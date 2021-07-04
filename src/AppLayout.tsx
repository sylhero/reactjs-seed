import React from 'react';
import { Layout } from 'antd';
import MainContent from './MainContent';
import Background from './assets/img/background.jpg';

const AppLayout = (): React.ReactElement => {
    return (
        <Layout
            style={{
                minHeight: `calc(100vh - 3px)`,
                background: `url(${Background}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%'
            }}
        >
            <Layout>
                <Layout.Content>
                    <MainContent />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
