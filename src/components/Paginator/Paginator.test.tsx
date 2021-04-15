import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Paginator, { IPaginationProps } from './Paginator';

describe('Paginator Component', () => {
  global.console.error = () => null;
  let wrapper;
  const defaultProps: IPaginationProps = {
    page: 1,
    totalRecords: 40,
    pageLimit: 2,
    pageNeighbours: 2,
    hidePaginationLimiter: false,
    onPageChanged: jest.fn(),
  };

  describe('render', () => {
    beforeEach(() => {
      wrapper = shallow(<Paginator {...defaultProps} />);
    });

    it('should render with 20 items in page 1', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });

    describe('componentDidUpdate', () => {
      beforeEach(() => {
        wrapper.setProps({
          totalRecords: 20
        });
      });

      it('should call onPageChanged callback from Props', () => {
        expect(defaultProps.onPageChanged).toHaveBeenCalledWith({
          currentPage: 1,
          totalPages: 10,
          pageLimit: 2,
          totalRecords: 20
        });
      });
    });

    describe('handleClick', () => {
      beforeEach(() => {
        const handleClick = wrapper.instance().handleClick(19);
        handleClick({ preventDefault: () => { /** */ } });
      });

      it('should navigate to page 19', () => {
        expect(renderer.create(wrapper)
          .toJSON())
          .toMatchSnapshot();
      });

      it('should call onPageChanged callback from', () => {
        expect(defaultProps.onPageChanged).toHaveBeenCalledWith({
          currentPage: 19,
          totalPages: 20,
          pageLimit: 2,
          totalRecords: 40
        });
      });
    });

    describe('handleMoveLeft', () => {
      beforeAll(() => {
        defaultProps.onPageChanged.mockReset();
        wrapper.instance().handleMoveLeft({ preventDefault: () => { /** */ } });
      });

      it('should call onPageChanged callback from Props', () => {
        expect(defaultProps.onPageChanged).toHaveBeenCalledWith({
          currentPage: 14,
          totalPages: 20,
          pageLimit: 2,
          totalRecords: 40
        });
      });
    });

    describe('handleMoveRight', () => {
      beforeAll(() => {
        defaultProps.onPageChanged.mockReset();
        wrapper.instance().handleMoveRight({ preventDefault: () => {} });
      });

      it('should call onPageChanged callback from Props', () => {
        expect(defaultProps.onPageChanged).toHaveBeenCalledWith({
          currentPage: 6,
          totalPages: 20,
          pageLimit: 2,
          totalRecords: 40
        });
      });
    });
  });
});
