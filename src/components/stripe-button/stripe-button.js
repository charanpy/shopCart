import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const StripeButton = ({ price }) => {
            const priceForStripe = price * 100;
            const publishKey = ''
            const onToken = token => {
                        console.log(token);
                        alert("Payment Successfull")
            }

            return (
                        <StripeCheckout
                                    label='Pay Now'
                                    name='SHOP CART'
                                    billingAddress
                                    shippingAddress
                                    image='https://svgshare.com/i/CUz.svg'
                                    description={`Total is $${price}`}
                                    amount={priceForStripe}
                                    panelLabel='Pay Now'
                                    token={onToken}
                                    stripeKey={publishKey}
                        />
            )
}

export default StripeButton;
