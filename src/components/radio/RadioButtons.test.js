
import React from 'react';
import { shallow } from 'enzyme';
import RadioButtons from './RadioButtons';

describe('RadioButtons component', () => {
  it('renders RadioButtons', () => {
    const wrapper = shallow(<RadioButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
