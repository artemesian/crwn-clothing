import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const publishKey = "pk_test_VEAswpAXXosC9TMhM2Ma7dKM00XaKuCzi2";
	const priceForStripe = price*100;
	const onToken = token => {
		alert('Payment Successful');
		console.log(token)
	}
  return (
    <StripeCheckout
    	label="Pay Now"
    	name="CRWN CLOTHING Ltd."
    	billingAddress
    	shippingAddress
    	image="https://svgshare.com/i/CUz.svg"
    	description={`Your total is $${price}`}
    	amount={priceForStripe}
    	panelLabel="Pay Now"
    	token={onToken}
    	stripeKey={publishKey}
    />
  )
}

export default StripeCheckoutButton;