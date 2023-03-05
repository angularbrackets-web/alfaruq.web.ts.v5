
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';

const programData = [
    {
      id: 1,
      title: "Friday Prayers",
      image: '/images/program1.jpg',
      description: "Join us every Friday for congregational prayers.",
    },
    {
      id: 2,
      title: "Quran Study",
      image: '/images/program2.jpg',
      description: "Join our weekly Quran study session and learn more about the teachings of Islam.",
    },
    {
      id: 3,
      title: "Community Dinner",
      image: '/images/program3.jpg',
      description: "Join us for a community dinner and meet fellow members of our mosque.",
    },
  ];
  

const HeroPrograms = () => {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const currentProgram = programData[currentProgramIndex];

  const handlePrev = () => {
    setCurrentProgramIndex(currentProgramIndex === 0 ? programData.length - 1 : currentProgramIndex - 1);
  };

  const handleNext = () => {
    setCurrentProgramIndex(currentProgramIndex === programData.length - 1 ? 0 : currentProgramIndex + 1);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 pr-0">
          <h1 className="text-4xl mb-6 font-bold text-gray-800">{currentProgram.title}</h1>
          <p className="text-gray-700 mb-8">{currentProgram.description}</p>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register Now
          </a>
          <div className="flex items-center mt-4">
            <FaRegCalendarAlt className="text-blue-500 mr-2" />
            <span className="text-gray-600">{currentProgram.date}</span>
          </div>
          <div className="flex items-center mt-4">
            <FaRegCalendarAlt className="text-blue-500 mr-2" />
            <span className="text-gray-600">{currentProgram.time}</span>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src={currentProgram.image}
            alt={currentProgram.title}
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-between relative">
          <div className="w-full overflow-hidden">
            <div className="flex">
              {programData.map((program, index) => (
                <div
                  key={program.id}
                  className={`${
                    index === currentProgramIndex
                      ? 'opacity-100'
                      : 'opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  } mr-4`}
                >
                  <div className="relative">
                    <div className="flex items-center justify-center rounded-lg h-32 w-32 bg-gray-200">
                      <Image
                        src={program.image}
                        alt={program.title}
                        width={150}
                        height={150}
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-6 bg-white">
                      <h2 className="text-lg font-bold text-gray-900">{program.title}</h2>
                      <p className="mt-2 text-gray-700">{program.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-400 hover:text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-400 hover:text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</section>
);
};

export default HeroPrograms;

