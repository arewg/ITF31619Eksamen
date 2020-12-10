import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../components/NoMatch.jsx';

it('should conatin the text 404', () => {
  const wrapper = shallow(<NoMatch />);
  expect(wrapper.text()).toContain('404');
});