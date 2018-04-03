import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../PageNotFound';

describe('PageNotFound', () => {
    it('should create a basic snapshot', () => {
        const wrapper = shallow(<PageNotFound />);
        expect(wrapper).toMatchSnapshot();
    });
});
