import React from 'react';
import { Provider } from 'react-redux';

import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import { getInitialState } from '../../../../mocks/store';

import Toolkit from './Toolkit';

describe('<PaginatorToolkit />', () => {
  let wrapper;
  const defaultProps = {
    onChange: jest.fn(),
    filterOptions: [],
    paginationProps: {
      currentPage: 1,
      pageLimit: 2,
      totalRecords: 2,
      totalPages: 2
    }
  };

  describe('render', () => {
    beforeEach(() => {
      const mockStore = configureStore();
      const store = mockStore(getInitialState());
      wrapper = mount(
        <Provider store={store}>
          <Toolkit {...defaultProps} />
        </Provider>
      );
    });

    it('should render a .paginator_toolkit wrapper with a <Search> and a <Filter> components', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('handleChange', () => {
    beforeEach(() => {
      wrapper = shallow(<Toolkit {...defaultProps} />);
    });

    it('should call onChange callback from Props', () => {
      wrapper.instance().handleChange({ name: 'search', value: 'some text to be searched' });
      expect(defaultProps.onChange).toHaveBeenCalledWith({
        currentPage: 1,
        pageLimit: 2,
        totalRecords: 2,
        totalPages: 2,
        search: '',
        filters: [],
        hideColumns: [],
        type: 'search'
      });
    });
  });
});
