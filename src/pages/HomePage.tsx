import Carousel from "./Carousel";
import Image from "next/image";
import masjidVectorImage from "public/mosque.vector.1.png";
import donateImage from "public/glassjar.donate.png";
import program1Image from 'public/Sunrise.Icon.png';
import program2Image from 'public/Noon.Icon.png';
import program3Image from 'public/Sunset.Icon.png';
const programs = [
  {
    id: 1,
    title: 'Program 1',
    description: 'Description for program 1',
    image: program1Image
  },
  {
    id: 2,
    title: 'Program 2',
    description: 'Description for program 2',
    image: program2Image
  },
  {
    id: 3,
    title: 'Program 3',
    description: 'Description for program 3',
    image: program3Image
  },
  
  
]

const HomePage = () => {
  return (
    <section className="min-h-screen">
    <Carousel
      slides={[
        <div className="hero min-h-screen bg-topleft-teal bgTealBlueGradient bg-bottomright-white">
                        <div className="container mx-auto flex flex-col md:flex-row items-center">
                            <div className="text-center md:text-left mb-6 md:mb-0">
                                <h1 className="text-4xl font-bold mb-6 text-teal-900">Welcome to Al Faruq Islamic Center</h1>
                                <p className="text-green-900 text-md mb-8">Join us for daily prayers, weekly programs, community events and much more.</p>
                                
                                <div className="grid grid-cols-2 gap-2 items-stretch mb-8 text-left text-sm">
                                  <div className="bg-teal-900 text-gray-200 rounded-md p-[10%]">
                                    <h6 className="mb-2 ml-2">Da'wah Programs</h6>
                                    <h6 className="mb-2 ml-2">Quran / Islamic Studies</h6>
                                    <h6 className="mb-2 ml-2">Youth Programs</h6>
                                    <h6 className="mb-2 ml-2">Education</h6>                                    
                                  </div>

                                  <div className="bg-teal-900 text-gray-200 rounded-md p-[10%]">
                                    <h6 className="">Wedding Services</h6>
                                    <h6 className="">Counselling</h6>
                                    <h6 className="">Funeral</h6>                                   
                                  </div>
                                </div>

                                <a href="#services" className="bg-blue-900 text-gray-200 px-5 py-3 rounded-lg hover:bg-blue-500 hover:text-gray-200">Learn More</a>
                                                           

                            </div>
                            <div className=" hidden md:block md:w-4/5 lg:w-2/3 xl:w-2/5 md:ml-auto">
                                <Image src={masjidVectorImage} alt='masjid' ></Image>
                            </div>
                        </div>
                    </div>
        ,
        <div className="hero min-h-screen bg-topleft-teal bgYellowGrayGradient bg-bottomright-white">
                        <div className="container mx-auto flex flex-col md:flex-row items-center">                            
                            <div className="text-center md:text-left mb-6 md:mb-0">
                                <h1 className="text-6xl font-bold mb-6">Donate Generously</h1>
                                <h2 className="text-3xl font-bold mb-6">Make a <span className="text-6xl text-red-500">difference</span></h2>
                                <p className="text-gray-600 text-xl mb-8">Support our mosque and your help will have a significant impact on our community</p>
                                <a href="#" className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-900 hover:text-blue-300">Donate Now</a>
                            </div>
                            <div className="w-full md:w-4/5 lg:w-2/3 xl:w-2/5 md:ml-auto">
                            <Image src={donateImage} alt='donate' ></Image>
                            </div>
                        </div>
                    </div>
      ]}
    />
    </section>
  );
};

export default HomePage;
