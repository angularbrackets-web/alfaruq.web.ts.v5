import React, { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

type Props = {
  donateButtonId: string;
  publishableKey: string;
};

const DonateButton: React.FC<Props> = ({ donateButtonId, publishableKey }) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [stripeError, setStripeError] = useState<Error | null>(null);

  useEffect(() => {
    const loadStripeApi = async () => {
      try {
        const stripeApi = await loadStripe(publishableKey);
        setStripe(stripeApi);
      } catch (error) {
        setStripeError(error as Error);
      }
    };

    loadStripeApi();
  }, [publishableKey]);

  if (stripeError) {
    return <div>Error loading Stripe: {stripeError.message}</div>;
  }

  if (!stripe) {
    return <div>Loading...</div>;
  }

  return (
    <Elements stripe={stripe}>
      <div dangerouslySetInnerHTML={{ __html: `<stripe-buy-button
  buy-button-id="${donateButtonId}"
  publishable-key="${publishableKey}"
>
</stripe-buy-button>` }} />
    </Elements>
  );
};

export default DonateButton;
