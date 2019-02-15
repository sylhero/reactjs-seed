import React from 'react';
import { storiesOf } from '@storybook/react';
import Test from '../Test';

storiesOf('Button', module).add('with text', () => {
    return <Test />;
});
