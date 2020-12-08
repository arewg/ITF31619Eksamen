import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header.jsx';

it('should contain no text', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.text()).toContain('');
});

it('should contain testingtitle', () => {
  const wrapper = shallow(<Header title="testingtitle" />);
  expect(wrapper.text()).toContain('testingtitle');
});
