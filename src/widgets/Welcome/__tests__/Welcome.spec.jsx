import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../Welcome';


/*
    shallow --- only render one level deep of the component
    mount --- full rendering (rendering in a browser-like environment with jsdom)
    render --- render the component into html

    https://github.com/airbnb/enzyme/tree/master/docs/api
 */
describe('Welcome', () => {
    it('should create a snapshot', () => {
        const props = {
            username: 'test'
        };
        const wrapper = shallow(<Welcome {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
