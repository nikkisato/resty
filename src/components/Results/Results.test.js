import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Result component', () => {
  it('match a snapshot', () => {
    const wrapper = shallow(<Results text='My Button' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('match a snapshot with type prop passed', () => {
    const wrapper = shallow(<Results type='button' text='My Button' />);
    expect(wrapper).toMatchSnapshot();
  });
});
