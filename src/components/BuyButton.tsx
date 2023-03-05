import React, { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

type Props = {
  buyButtonId: string;
  publishableKey: string;
};

const BuyButton: React.FC<Props> = ({ buyButtonId, publishableKey }) => {
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

  const handleBuyButtonClick = async () => {
    if (!stripe) {
      return;
    }

    const response = await fetch(`/api/create-checkout-session?buyButtonId=${buyButtonId}`);
    const session = await response.json();

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error(error);
    }
  };

  if (stripeError) {
    return <div>Error loading Stripe: {stripeError.message}</div>;
  }

  if (!stripe) {
    return <div>Loading...</div>;
  }

  return (
    <button onClick={handleBuyButtonClick}>Buy now</button>
  );
};

export default BuyButton;
