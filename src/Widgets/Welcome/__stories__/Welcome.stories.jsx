import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../../../.storybook/Provider';
import Welcome from '../Welcome';

storiesOf('Welcome', module)
    .addDecorator((story) => {
        return <Provider story={story()} />;
    })
    .add('with text', () => {
        return <Welcome username="test" />;
    });
