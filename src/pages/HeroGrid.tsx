import Carousel from "./Carousel";
import CarouselSlider from "./CarouselSlider";
import { FaLocationArrow, FaUserGraduate, FaUsers, FaSmile, FaMoneyCheckAlt } from 'react-icons/fa';
import { GiPublicSpeaker, GiLovers } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import Link from "next/link";


export default function HeroGrid(){
    return(
        <section id="Home" className="text-lime-300 angledBgSlate">
        <div className=" md:container md:mx-auto cards">
  <div className="card2 flex flex-col justify-center">
    <h1 className="text-2xl mb-6">Welcome to </h1>
    <h1 className="text-6xl mb-6 font-extrabold">Al Faruq Islamic Center</h1>
    <a href="https://goo.gl/maps/LfjqyUzs7dtqjeqF9" target="_blank">
    <p className="bg-lime-100 rounded-md text-lime-900 mb-6 font-extralight flex items-center px-5 py-1 w-fit"><FaLocationArrow /><span className="ml-5">4410 127 Street SW, Edmonton, Alberta</span></p>
    </a>    
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
    <h4 className="font-extrabold mb-6 text-teal-200 text-2xl">PROGRAMS</h4>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><GiPublicSpeaker /></span> Da'wah Programs</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><BsBook /></span> Quran / Islamic Studies</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaUsers /></span> Youth Programs</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaUserGraduate /></span> Education</h6>
  </div>
  <div className="min-w-[25vw] p-4 angledBgDarkTeal border-l-4 border-lime-300 text-lime-100 rounded-lg mb-2">
    <h4 className="font-extrabold mb-6 text-teal-200 text-2xl">SERVICES</h4>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><GiLovers /></span> Wedding Services</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaSmile /></span> Counselling</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaUsers /></span> Funeral Services</h6>
  </div>
  <div className="min-w-[25vw] p-4 angledBgDarkTeal border-l-4 border-lime-300 text-lime-100 rounded-lg mb-2">
    <h4 className="font-extrabold mb-6 text-teal-200 text-2xl">DONATE</h4>
    <p>Support our mosque and your help will have a significant impact on our community</p>
    <div>
    <Link href='#Donate' className="flex items-center align-middle h-12 w-fit mt-12 px-10 py-2 text-lg text-slate-800 font-extrabold transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-cyan-500"><span className='mr-3'><FaMoneyCheckAlt /></span>Donate</Link>
    </div>
  </div>
  </div>
  
</div>
</section>
    )
}