import DonateButton from '@/components/DonateButton';
import { useState } from 'react';
import Card, { CardData } from './Card';

type Props = {
  cards: CardData[];
  buttonId: string;
};

const CardSelector = ({ cards, buttonId }: Props) => {
  const [selectedId, setSelectedId] = useState('buy_btn_1MgJUYK6mKjqDOPwfMIYOg3g');

  const handleCardClick = (id: string) => {
    setSelectedId(id);
  };

  const handleButtonClick = () => {
    if (!selectedId) {
      console.log('No card selected!');
    } else {
      console.log(`Button ${selectedId} clicked`);
    }
  };
  const publishableKey = 'pk_test_AXsypkph5Tlbuvyhzr0HYzs700CLlAFZQc';
  return (
    <div>
      <div className="w-full flex flex-wrap mb-10">
        {cards?.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            selectedId={selectedId}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      
      <DonateButton donateButtonId={selectedId} publishableKey={publishableKey} />
    </div>
  );
};

export default CardSelector;
