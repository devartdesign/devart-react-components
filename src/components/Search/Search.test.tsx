import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Search, { ISearchProps } from './Search';

describe('<Search />', () => {
  let wrapper;
  const defaultProps: ISearchProps = {
    onSearch: jest.fn()
  };

  describe('render', () => {
    beforeEach(() => {
      wrapper = shallow(<Search {...defaultProps} />);
    });

    it('should render <SearchIcon> and an <input> components', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('handleChange', () => {
    beforeEach(() => {
      wrapper = shallow(<Search {...defaultProps} />);
      wrapper.dive().instance().handleChange({
        preventDefault: () => { /** */},
        target: {
          name: 'search',
          value: 'search me'
        }
      });
    });

    it('should call onSearch callback from Props', () => {
      expect(defaultProps.onSearch).toHaveBeenCalledWith('search me');
    });
  });
});
