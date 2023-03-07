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
      className={`paymentCard angledBgPaleGray w-full sm:w-[40%] md:w-[40%] lg:w-[30%] h-[130px] p-12 pt-12 pl-10 align-middle justify-items-center mr-3 mb-3 ${
        selectedId === id ? ' angledBgDarkTeal text-white border border-emerald-600 shadow-md' : 'bg-gray-200 border border-gray-300 text-emerald-700 shadow-md'
      } p-4 rounded-md cursor-pointer`}
      onClick={handleClick}
      id={id}
    >
      <p>{text}</p>
    </div>
  );
};

export default Card;
