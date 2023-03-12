import Carousel from "./Carousel";
import CarouselSlider from "./CarouselSlider";
import { FaLocationArrow, FaUserGraduate, FaUsers, FaSmile } from 'react-icons/fa';
import { GiPublicSpeaker, GiLovers } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';



export default function HeroGrid(){
    return(
        <section id="Home" className="text-lime-300 angledBgSlate">
        <div className=" md:container md:mx-auto cards">
  <div className="card2 flex flex-col justify-center">
    <h1 className="text-2xl mb-6">Welcome to </h1>
    <h1 className="text-6xl mb-6 font-extrabold">Al Faruq Islamic Center</h1>
    <p className="bg-lime-100 rounded-md text-lime-900 mb-6 font-extralight flex items-center px-5 py-1 w-fit"><FaLocationArrow /><span className="ml-5">4410 127 Street SW, Edmonton, Alberta</span></p>
    <p className="text-md text-cyan-300">Join us for daily prayers, weekly programs, community events and much more.</p>
  </div>
  <div className="card2">
  <CarouselSlider slides={[
                            <div className="rounded-lg bgSlide h-full w-full bg-no-repeat bg-contain bg-center"></div>,
                            <div className="rounded-lg bgSlideTall h-full w-full bg-no-repeat bg-contain bg-center"></div>,
                            <div className="rounded-lg bgSlideWide h-full w-full bg-no-repeat bg-contain bg-center"></div>
                        ]}></CarouselSlider>
  </div>
  <div className="card2 hidden sm:flex sm:flex-row sm:gap-5">
  <div className="min-w-[25vw] p-4 angledBgDarkTeal border-l-4 border-lime-300 text-lime-100 rounded-lg mb-2">
    <h4 className="font-extrabold mb-6 text-lime-200 text-2xl">PROGRAMS</h4>
    <h6 className="mb-2 flex items-center gap-4"><GiPublicSpeaker /> Da'wah Programs</h6>
    <h6 className="mb-2 flex items-center gap-4"><BsBook /> Quran / Islamic Studies</h6>
    <h6 className="mb-2 flex items-center gap-4"><FaUsers /> Youth Programs</h6>
    <h6 className="mb-2 flex items-center gap-4"><FaUserGraduate /> Education</h6>
  </div>
  <div className="min-w-[25vw] p-4 angledBgDarkTeal border-l-4 border-lime-300 text-lime-100 rounded-lg mb-2">
    <h4 className="font-extrabold mb-6 text-lime-200 text-2xl">SERVICES</h4>
    <h6 className="mb-2 flex items-center gap-4"><GiLovers /> Wedding Services</h6>
    <h6 className="mb-2 flex items-center gap-4"><FaSmile /> Counselling</h6>
    <h6 className="mb-2 flex items-center gap-4"><FaUsers /> Funeral Services</h6>
  </div>
  <div className="min-w-[25vw] p-4 angledBgDarkTeal border-l-4 border-lime-300 text-lime-100 rounded-lg mb-2">
    <h4 className="font-extrabold mb-6 text-lime-200 text-2xl">DONATE</h4>
    <p>Support our mosque and your help will have a significant impact on our community</p>
  </div>
  </div>
  
</div>
</section>
    )
}