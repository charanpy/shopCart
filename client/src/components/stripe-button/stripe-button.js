import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeButton = ({ price }) => {
            const priceForStripe = price * 100;
            const publishKey = 'pk_test_51HT5nIDKV0ASSP3YmtkvyT5WvT5g4L8i0Hu8XHtj4ZeirCVBAN12SVpg7MWLCLgFxUTsKuhG4jatUduiIdeB0CuT007W1d0e8Y'
            const onToken = token => {
                        axios({
                                    url: 'payment',
                                    method: 'post',
                                    data: {
                                                amount: priceForStripe,
                                                token
                                    }
                        }).then(res => {
                                    alert('Payment successfull')
                        }).catch(error => {

                                    alert('There was an issue with payment,Please sure you use provided credit card ')
                        })
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
