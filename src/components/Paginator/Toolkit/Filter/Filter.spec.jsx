import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Filter from './Filter';

describe('<PaginatorToolkitFilter />', () => {
  let wrapper;
  const defaultProps = {
    onSelect: jest.fn(),
    options: [{
      id: 'name',
      value: 'name',
      text: 'name',
    }, {
      id: 'status',
      value: 'status',
      text: 'status'
    }],
    selectedOptions: ['status'],
    label: 'Filter'
  };

  describe('render', () => {
    beforeEach(() => {
      wrapper = shallow(<Filter {...defaultProps} />);
    });

    it('should render <SearchIcon> and an <Input> components', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('handleChange', () => {
    beforeEach(() => {
      wrapper = shallow(<Filter {...defaultProps} />);
      wrapper.instance().handleChange({
        target: {
          name: 'filter',
          value: ['name']
        }
      });
    });

    it('should call onSelect callback from Props', () => {
      expect(defaultProps.onSelect).toHaveBeenCalledWith({
        name: 'filter',
        value: ['name']
      });
    });
  });
});
