import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action'

const Cart = ({ items, history, dispatch }) => {
            return (
                        <div className='cart-dropdown'>
                                    <div className='cart-items' >
                                                {
                                                            items.length > 0 ?
                                                                        items.map(item => <CartItem key={item.id} item={item} />) :
                                                                        (<span className='empty-cart'>Your Cart is Empty</span>)}
                                    </div>
                                    <CustomButton onClick={() => {
                                                history.push('/checkout')
                                                dispatch(toggleCartHidden())
                                    }}>GO TO CHECKOUT</CustomButton>
                        </div>
            )
}
const mapStateToProps = createStructuredSelector({
            items: selectCartItems
})
export default withRouter(connect(mapStateToProps)(Cart));
