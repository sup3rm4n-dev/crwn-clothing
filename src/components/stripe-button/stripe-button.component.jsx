import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, ...props }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Y8ZezDGRQ20LEe87XaHQJqXE00nniaQD75';

  const onToken = token => {
    console.log(props);
    console.log(`[stripe token]: ${token}`);
    alert('Payment Successfull!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      allowRememberMe={false}
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
