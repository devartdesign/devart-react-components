import * as React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Toast, { IToastProps, ToastType } from './Toast';

describe('Toast', () => {
  let props: IToastProps;
  let Component;

  beforeEach(() => {
    props = {
      title: 'title',
      description: 'description',
      type: ToastType.SUCCESS,
      onClose: jest.fn()
    };
    Component = shallow<Toast>(<Toast {...props} />);
  });

  it('should render', () => {
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should onClose', () => {
    Component.find('button').simulate('click');
    expect(props.onClose).toBeCalled();
  });
});
