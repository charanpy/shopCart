import React from 'react'
import './checkout.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeButton from '../../components/stripe-button/stripe-button'

const Checkout = ({ cartItems, total }) => {
            return (
                        <div className='checkout-page'>
                                    <div className='checkout-header'>
                                                <div className='header-block'>
                                                            <span>Product</span>
                                                </div>

                                                <div className='header-block'>
                                                            <span>Description</span>
                                                </div>

                                                <div className='header-block'>
                                                            <span>Quantity</span>
                                                </div>

                                                <div className='header-block'>
                                                            <span>Price</span>
                                                </div>

                                                <div className='header-block'>
                                                            <span>Remove</span>
                                                </div>
                                    </div>
                                    {cartItems.map(cartItem => (
                                                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                                    ))}

                                    <div className='total'>
                                                ${total}
                                    </div>

                                    <div className='test-warning'>
                                                *Please use following test credit card for Payment
            <br />
            4242 4242 4242 4242  - exp:01/21 CVV-123
</div>

                                    <StripeButton price={total} />

                        </div>
            )
}
const mapStateToProps = createStructuredSelector({
            cartItems: selectCartItems,
            total: selectCartTotal
})
export default connect(mapStateToProps)(Checkout);