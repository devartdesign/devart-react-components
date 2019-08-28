import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Col from './Col';

describe('Col Component', () => {
  global.console.error = () => null;
  let Component;
  it('should render', () => {
    Component = mount(<Col>data</Col>);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render with extra css classes', () => {
    Component = mount(
      <Col size={6} className="another-css-class">
        <p>data</p>
      </Col>
    );
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
