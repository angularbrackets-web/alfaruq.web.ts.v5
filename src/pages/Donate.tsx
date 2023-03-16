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
        <section id="Donate" className='min-h-screen angledBgSlateLight2 text-lime-500'>
          <div className='container donateBg'>
            <h1 className='text-6xl mb-6 text-lime-500 font-extrabold'>Donate Now</h1>
            <h1 className='text-3xl mb-6 text-lime-600'>Make a difference</h1>
            <p className='text-xs md:text-lg lg:text-xl mb-16 text-slate-700 bg-lime-100 rounded-lg w-fit px-8'>Your help will have a significant impact on our community</p>
          <CardSelector cards={cards} buttonId={buttonId} />
          {/* <DonateButton donateButtonId={buyButtonId} publishableKey={publishableKey} /> */}
        </div>
        </section>
    )
}