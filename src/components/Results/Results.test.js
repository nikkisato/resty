import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('Result component', () => {
  it('match a snapshot', () => {
    const wrapper = shallow(<Result text='My Button' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match a snapshot with type prop passed', () => {
    const wrapper = shallow(<Result type='button' text='My Button' />);
    expect(wrapper).toMatchSnapshot();
  });
});
