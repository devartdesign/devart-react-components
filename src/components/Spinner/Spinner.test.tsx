import * as React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Spinner from './Spinner';
describe('Spinner', () => {
  let Component;
  it('should render', () => {
    Component = shallow<Spinner>(<Spinner />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
