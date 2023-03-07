import DonateButton from '@/components/DonateButton';
import * as React from 'react';
import CardSelector from './CardSelector';

type Props = {
  cards: {
    id: string;
    text: string;
  }[];
  buttonId: string;
};

export default function Donate(){
    const buyButtonId = 'buy_btn_1MgJUYK6mKjqDOPwfMIYOg3g';
  const publishableKey = 'pk_test_AXsypkph5Tlbuvyhzr0HYzs700CLlAFZQc';

  const cards = [
    { id: 'buy_btn_1MgJUYK6mKjqDOPwfMIYOg3g', text: 'Masjid Donation (One time)' },
    { id: 'buy_btn_1MiKs3K6mKjqDOPwmWMrIoyT', text: 'Masjid Donation (C$ 100.00 - Monthly)' },
    { id: 'buy_btn_1MiKwgK6mKjqDOPw0ihCtwjJ', text: 'Masjid Donation (C$ 250.00 - Monthly)' },
    { id: 'buy_btn_1MiKycK6mKjqDOPw2MCa56Pz', text: 'Masjid Donation (C$ 500.00 - Monthly)' },
  ];

  const buttonId = '';

    return(
        <section className='min-h-screen bg-gradient-to-br from-gray-300 to-yellow-300 text-gray-900'>
          <div className='container donateBg'>
            <h1 className='text-6xl mb-6 text-emerald-800'>Donate Now</h1>
            <h1 className='text-3xl mb-3 text-green-600'>Make a difference</h1>
            <p className='text-xl mb-16 text-yellow-700 bg-yellow-400 border border-yellow-500 rounded-lg w-fit p-1'>Your help will have a significant impact on our community</p>
          <CardSelector cards={cards} buttonId={buttonId} />
          {/* <DonateButton donateButtonId={buyButtonId} publishableKey={publishableKey} /> */}
        </div>
        </section>
    )
}