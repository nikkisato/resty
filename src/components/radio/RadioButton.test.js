import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('RadioButton component', () => {
  it('renders RadioButton', () => {
    const wrapper = shallow(<RadioButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
