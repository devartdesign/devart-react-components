import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Row from './Row';

describe('Row Component', () => {
  global.console.error = () => null;
  let Component;
  it('should render', () => {
    Component = mount(<Row>data</Row>);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render with extra css classes', () => {
    Component = mount(
      <Row className="another-css-class">
        <p>data</p>
      </Row>
    );
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
