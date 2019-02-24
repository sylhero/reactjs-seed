import React from 'react';
import { storiesOf } from '@storybook/react';
import Test from '../Test';

const stories = storiesOf('Test', module);

stories.add('basic test', () => {
    return <Test style={{color: 'blue'}} />;
});

stories.add('fancy test', () => {
    return <Test />;
});
