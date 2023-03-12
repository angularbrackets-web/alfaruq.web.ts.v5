import React from 'react';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';
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
      className={` paymentCard angledBgPaleGreen opacity-80 w-full sm:w-[40%] md:w-[40%] lg:w-[30%]align-middle justify-items-center mr-3 mb-3 ${
        selectedId === id ? ' angledBgDarkTeal text-white shadow-md' : 'bg-gray-200 text-emerald-900 shadow-md'
      } p-4 rounded-md cursor-pointer`}
      onClick={handleClick}
      id={id}
    >
      <p className='flex items-center'>{
        selectedId === id ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff /> } <span className='ml-5'>{text}</span> </p>
    </div>
  );
};

export default Card;
