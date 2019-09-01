import React from 'react';
import { Provider } from 'react-redux';

import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import { getInitialState } from '../../../mocks/store';
import Paginator from './Paginator';

describe('<Paginator />', () => {
  let wrapper;
  const defaultProps = {
    handleChange: jest.fn(),
    children: (<div>Some paginated children</div>),
    enableToolkit: false,
    totalRecords: 10,
    pageLimit: 5,
    pageNeighbours: 2,
    filterOptions: []
  };

  describe('render', () => {
    beforeEach(() => {
      wrapper = shallow(<Paginator {...defaultProps} />);
    });

    it('should render a <Pagination> with 2 pages with currentPage 1 and children over it', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('toolkit enable', () => {
    beforeEach(() => {
      defaultProps.enableToolkit = true;
      defaultProps.filterOptions = [{
        id: 'name',
        value: 'name',
        text: 'name'
      }, {
        id: 'lastname',
        value: 'lastname',
        text: 'lastname'
      }];
      const mockStore = configureStore();
      const store = mockStore(getInitialState());
      wrapper = mount(
        <Provider store={store}>
          <Paginator {...defaultProps} />
        </Provider>
      );
    });

    it('should render <Pagination> with children above and <Search> and <Filter> toolkit components', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('handleChange', () => {
    beforeEach(() => {
      wrapper = shallow(<Paginator {...defaultProps} />);
    });

    it('should call handleChange callback from Props', () => {
      wrapper.instance().handleChange({ currentPage: 1, pageLimit: 2 });
      expect(defaultProps.handleChange).toHaveBeenCalledWith({ currentPage: 1, pageLimit: 2 });
    });
  });
});
