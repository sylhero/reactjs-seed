import React from 'react';
import { Layout } from 'antd';
import MainContent from './MainContent';

const AppLayout = (): React.ReactElement => {
    return (
        <Layout id="appLayout">
            <Layout>
                <Layout.Content>
                    <MainContent />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
