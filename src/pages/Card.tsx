import React from 'react';

export type CardData = {
  id: string;
  text: string;
};

type Props = CardData & {
  selectedId: string;
  onCardClick: (id: string) => void;
};

const Card = ({ id, text, selectedId, onCardClick }: Props) => {
  const handleClick = () => {
    onCardClick(id);
  };

  return (
    <div
      className={`${
        selectedId === id ? 'bg-emerald-900 text-white bg-border border-emerald-300 shadow-md' : 'bg-gray-100 bg-border border-gray-700 shadow-md'
      } p-4 rounded-md cursor-pointer hover:bg-emerald-500 hover:bg-border hover:border-emerald-800`}
      onClick={handleClick}
      id={id}
    >
      <p>{text}</p>
    </div>
  );
};

export default Card;
