import Carousel from "./Carousel";
import CarouselSlider from "./CarouselSlider";
import { FaLocationArrow, FaUserGraduate, FaUsers, FaSmile, FaMoneyCheckAlt } from 'react-icons/fa';
import { GiPublicSpeaker, GiLovers } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import Link from "next/link";
import Image from "next/image";
import Slide1Image from '../../public/Fadliga.Ramadaanka.jpeg'


export default function HeroGrid(){
    return(
        <section id="Home" className="text-lime-300 angledBgSlate">
        <div className=" md:container md:mx-auto cards">
  <div className="card2 flex flex-col justify-center">
    <h1 className="text-2xl mb-6">Welcome to </h1>
    <h1 className="text-6xl mb-6 font-extrabold">Al Faruq Islamic Center</h1>
    <a href="https://goo.gl/maps/LfjqyUzs7dtqjeqF9" target="_blank">
    <p className="bg-slate-700 rounded-md text-slate-300 mb-6 flex items-center px-5 py-1 w-fit font-thin"><FaLocationArrow /><span className="ml-5">4410 127 Street SW, Edmonton, Alberta</span></p>
    </a>    
    <p className="text-md text-cyan-300">Join us for daily prayers, weekly programs, community events and much more.</p>
  </div>
  <div className="card2 p-10">
  <CarouselSlider slides={[
                            <div className="rounded-lg h-full w-full ">
                              <div className="bgSlide h-[65%] w-full bg-no-repeat bg-contain bg-center"></div>
                              <div className="text-lime-100">
                                <h3 className="text-2xl my-2 font-bold text-cyan-100">
                                Fadligaa Ramadaanka
                                </h3>
                                <h5 className="mb-2 font-thin italic text-xs text-slate-300">
                                March 04, 2023, 9:00 PM
                                </h5>
                                <p className="mb-6 font-thin text-sm">
                                This 2 day weekend class will cover the principles surrounding fasting and the month of Ramadan
                                </p>
                                <a href="https://www.eventbrite.com/e/fiqh-of-ramadan-tickets-534576682247?aff=eand" target="_blank" className=" bg-cyan-500 hover:bg-cyan-600 p-3 px-6 rounded-md">
                                Register
                                </a>
                              </div>
                            </div>,
                            <div className="rounded-lg  h-full w-full">
                              <div className="bgSlideTall  h-[65%] w-full bg-no-repeat bg-contain bg-center"></div>
                              <div className="text-lime-100">
                                <h3 className="text-2xl my-2 font-bold text-cyan-100">
                                Fiqh of Ramadaan
                                </h3>
                                <h5 className="mb-2 font-thin italic text-xs text-slate-300">
                                March 04th and 05th, 2023 (Saturday and Sunday) 3:00 PM - 7:00 PM
                                </h5>
                                <p className="mb-6 font-thin text-sm">
                                This 2 day weekend class will cover the principles surrounding fasting and the month of Ramadan
                                </p>
                                <a href="https://www.eventbrite.com/e/fiqh-of-ramadan-tickets-534576682247?aff=eand" target="_blank" className=" bg-cyan-500 hover:bg-cyan-600 p-3 px-6 rounded-md">
                                Register
                                </a>
                              </div>
                            </div>,
                            <div className="rounded-lg  h-full w-full">
                              <div className="bgSlideWide h-[65%] w-full bg-no-repeat bg-contain bg-center"></div>
                              <div className="text-lime-100">
                                <h3 className="text-2xl my-2 font-bold text-cyan-100">
                                Leaders of Tomorrow
                                </h3>
                                <h5 className="mb-2 font-thin italic text-xs text-slate-300">
                                December 24, 2022, 3:00 PM - 7:00 PM
                                </h5>
                                <p className="mb-6 font-thin text-sm">
                                This 2 day weekend class will cover the principles surrounding fasting and the month of Ramadan
                                </p>
                                <a href="https://www.eventbrite.com/e/fiqh-of-ramadan-tickets-534576682247?aff=eand" target="_blank" className=" bg-cyan-500 hover:bg-cyan-600 p-3 px-6 rounded-md">
                                Register
                                </a>
                              </div>
                            </div>
                        ]}></CarouselSlider>
  </div>
  <div className="card2 hidden sm:flex sm:flex-row sm:gap-5">
  <div className="min-w-[25vw] p-4 angledBgDarkTeal border-l-4 border-lime-300 text-cyan-100 rounded-lg mb-2">
    <h4 className="mb-6 text-teal-200 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl px-16 py-2 w-fit">PROGRAMS</h4>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><GiPublicSpeaker /></span> Da'wah Programs</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><BsBook /></span> Quran / Islamic Studies</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaUsers /></span> Youth Programs</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaUserGraduate /></span> Education</h6>
  </div>
  <div className="min-w-[25vw] p-4 angledBgDarkTeal border-l-4 border-lime-300 text-cyan-100 rounded-lg mb-2">
    <h4 className="mb-6 text-teal-200 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl px-16 py-2 w-fit">SERVICES</h4>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><GiLovers /></span> Wedding Services</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaSmile /></span> Counselling</h6>
    <h6 className="mb-2 flex items-center gap-8"><span className="text-teal-100"><FaUsers /></span> Funeral Services</h6>
  </div>
  <div className="min-w-[25vw] p-4 angledBgLime border-l-4 border-lime-600 text-lime-100 rounded-lg mb-2">
    <h4 className="mb-6 text-teal-100 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-xl px-16 py-2 w-fit">DONATE</h4>
    <p className="text-slate-700">Support our mosque and your help will have a significant impact on our community</p>
    <div>
    <Link href='#Donate' className="flex items-center align-middle h-12 w-fit mt-12 px-5 py-2 text-lg text-slate-800 font-extrabold transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-cyan-500"><span className='mr-3'><FaMoneyCheckAlt /></span>Donate Now</Link>
    </div>
  </div>
  </div>
  
</div>
</section>
    )
}