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
      <div className="flex gap-4">
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
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-8 rounded"
        onClick={handleButtonClick}
        disabled={!selectedId}
        id={selectedId ?? ''}
      >
        {selectedId ? `Button ${selectedId}` : 'Select a card first'}
      </button>
      <br />
      <DonateButton donateButtonId={selectedId} publishableKey={publishableKey} />
    </div>
  );
};

export default CardSelector;
