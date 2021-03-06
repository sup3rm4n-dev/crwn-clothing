/* eslint-disable */
// import React from 'react';
// import { shallow } from 'enzyme';
// import { CartDropdown } from './cart-dropdown.component';
// import CartItem from '../cart-item/cart-item.component';
// import { toggleCartHidden } from '../../redux/cart/cart.actions';

// describe('CartDropdown component', () => {
//   let wrapper;
//   let mockObj = Object.create(null);
//   let mockHistory = {};
//   let mockDispatch;
//   const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

//   beforeEach(() => {
//     mockHistory = { push: jest.fn() };
//     mockDispatch = jest.fn();
//     const mockProps = {
//       cartItems: mockCartItems,
//       dispatch: mockDispatch,
//     };

//     wrapper = shallow(<CartDropdown {...mockProps} />);
//   });

//   it('should render CartDropdown component', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

//   /* eslint-disable */
// it('should call history.push when button is clicked', () => {
//   wrapper.find('CartDropDownButton').simulate('click');
// expect(mockHistory.push).toHaveBeenCalled();
// expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
// });

//   it('should render an equal number of CartItem components as the CartItem prop', () => {
//     expect(wrapper.find(CartItem)).toHaveLength(mockCartItems.length);
//   });

//   it('should render EmptyMessageContainer if cartItems is empty', () => {
//     const mockProps = {
//       cartItems: [],
//       history: mockHistory,
//       dispatch: mockDispatch,
//     };
//     const newWrapper = shallow(<CartDropdown {...mockProps} />);
//     expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
//   });
// });
