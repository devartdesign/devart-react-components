import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import { DoneIcon } from '../../icons';
import Chip, { IChipProps } from './Chip';

describe('Chip Component', () => {
  let Component;
  let props: IChipProps;

  beforeEach(() => {
    props = {
      label: 'label chip',
      icon: DoneIcon,
      key: 'key chip',
      onClick: jest.fn(),
    };
    Component = shallow(<Chip {...props} />);
  });

  it('should render', () => {
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should call onClick callback from props', () => {
    Component.find('div').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
