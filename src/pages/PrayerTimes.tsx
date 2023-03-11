import React, { useState, useEffect } from 'react';
import Image from "next/image"
import FajrIcon from "public/Fajr.Icon.jpeg"
import SunriseIcon from "public/Sunrise.Icon.png"
import NoonIcon from "public/Noon.Icon.png"
import AsrIcon from "public/Asr.Icon.png"
import SunsetIcon from "public/Sunset.Icon.png"
import NightSkyIcon from "public/Night.Sky.Icon.png"
import getPrayerTimes from '@/components/getPrayerTimes';
import CountDownTimer from './CountdownTimer';


export default function PrayerTimes(){

  const prayerTimes = getPrayerTimes()
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const hijriDate = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
  
const todayLocaleDate = new Date().toLocaleDateString('en-ca', { weekday:"long", year:"numeric", month:"short", day:"numeric", timeZone: 'MST'})


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


    return(

      <section className="min-h-screen text-lime-300 angledBgSlate">
            <div className="flex flex-col p-2 md:p-6">
  <div className="overflow-x-auto">
    <div className="inline-block min-w-full sm:p-0 lg:px-8 px-[3%] py-0">
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold mb-2">Prayer Times</h1>
        <h6 className="text-md font-thin text-slate-200 mb-2">{todayLocaleDate}</h6>
      <h6 className="text-md font-thin text-slate-200">{hijriDate}</h6>
      </div>


      <CountDownTimer />

      <div className="overflow-hidden">
        <table className="min-w-full text-left text-xl font-light mb-4">
          <thead className=" border-b-4 border-cyan-900 text-cyan-300 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">Prayer</th>
              <th scope="col" className="px-6 py-4">Adhaan</th>
              <th scope="col" className="px-6 py-4">Iqamah</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Fajr </span>
                <span className='badgeSlateLime w-20 text-right'>الفجر</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.fajrAzzan}</td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.fajrIqamah}</td>
            </tr>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Sunrise </span>
                <span className='badgeSlateLime w-20 text-right'>الشروق</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.sunriseTime}</td>
              <td className="whitespace-nowrap px-6 py-4"></td>
            </tr>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Dhuhr </span>
                <span className='badgeSlateLime w-20 text-right'>الظهر</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.zohrAzzan}</td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.zohrIqamah}</td>
            </tr>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Asr </span>
                <span className='badgeSlateLime w-20 text-right'>العصر</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.asrAzzan}</td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.asrIqamah}</td>
            </tr>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Maghrib </span>
                <span className='badgeSlateLime w-20 text-right'>المغرب</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.maghribAzzan}</td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.maghribIqamah}</td>
            </tr>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Isha </span>
                <span className='badgeSlateLime w-20 text-right'>العشاء</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.ishaAzzan}</td>
              <td className="whitespace-nowrap px-6 py-4">{prayerTimes.ishaIqamah}</td>
            </tr>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Jummah 1</span>
                <span className='badgeSlateLime w-20 text-right'>ٱلْجُمُعَة 1</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">01:45 PM</td>
              <td className="whitespace-nowrap px-6 py-4"></td>
            </tr>
            <tr className="border-b border-lime-900">
              <td className="whitespace-nowrap px-6 py-4 font-extralight flex justify-between">
                <span className='font-bold'>Jummah </span>
                <span className='badgeSlateLime w-20 text-right'>ٱلْجُمُعَة 2</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4">03:00 PM</td>
              <td className="whitespace-nowrap px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
















{/* <div className="container mx-auto px-4 sm:px-8">
  <div className='-my-36'>
    <div className=''>
      <h2 className="text-5xl font-semibold leading-tight">Prayer Times</h2>
      <h6>{todayLocaleDate}</h6>
      <h6>{hijriDate}</h6>
    </div>
    <div>
    <CountDownTimer />
    </div>
    <div className="">
      <div
        className="inline-block min-w-full shadow-lg rounded-2xl overflow-hidden"
      >
        <table className="min-w-full leading-normal mosqueBg">
          <thead>
            <tr className='text-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-green-100 border-b-2 border-emerald-600'>
              <th
                className="p-5 text-left font-semibold uppercase tracking-wider"
              >
                Prayer
              </th>
              <th
                className="px-5 py-3   text-left font-semibold uppercase tracking-wider"
              >
                Adhaan
              </th>
              <th
                className="px-5 py-3  text-left font-semibold uppercase tracking-wider"
              >
                Iqamah
              </th>
              <th
                className="px-5 py-3   text-left font-semibold uppercase tracking-wider"
              >
                
              </th>              
            </tr>
          </thead>
          <tbody className='text-2xl'>
            <tr className='bg-gradient-to-br from-emerald-900 to-gray-900 text-emerald-100'>
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16">
                    <Image
                      className="w-full h-full rounded-full"
                      src={FajrIcon}
                      alt="FajrIcon"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>Fajr</p>
                    <p>صلاة الفجر</p>
                  </div>
                </div>
              </td>
              <td>
                <p  className="px-5 py-5 ">{prayerTimes.fajrAzzan}</p>                
              </td>
              <td>
                <p  className="px-5 py-5 ">{prayerTimes.fajrIqamah}</p>
              </td>
              <td>
                
              </td>
              
            </tr>
            <tr className='bg-gradient-to-br from-emerald-900 to-gray-900 text-emerald-100'>
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16">
                  <Image
                      className="w-full h-full rounded-full"
                      src={SunriseIcon}
                      alt="SunriseIcon"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>
                      Sunrise
                    </p>
                    <p>الشروق</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="px-5 py-5 ">{prayerTimes.sunriseTime}</p>
              </td>
              <td>
              </td>
              <td>
                
              </td>
              
            </tr>
            <tr className='bg-gradient-to-br from-emerald-900 to-gray-900 text-emerald-100'>
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16">
                  <Image
                      className="w-full h-full rounded-full"
                      src={NoonIcon}
                      alt="NoonIcon"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>
                      Dhuhr
                    </p>
                    <p>صلاة الظهر</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="px-5 py-5 ">{prayerTimes.zohrAzzan}</p>
              </td>
              <td>
                <p className="px-5 py-5 ">{prayerTimes.zohrIqamah}</p>
              </td>
              <td>
                
              </td>
              
            </tr>
            <tr className="bg-gradient-to-br from-emerald-900 to-gray-900 text-emerald-100">
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-400 rounded-full">
                  <Image
                      className="w-full h-full rounded-full"
                      src={AsrIcon}
                      alt="AsrIcon"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>
                      Asr
                    </p>
                    <p>صلاة العصر</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 ">
                <p>{prayerTimes.asrAzzan}</p>
              </td>
              <td className="px-5 py-5 ">
                <p>{prayerTimes.asrIqamah}</p>
                  
              </td>
              <td className="px-5 py-5 ">
              </td>
              
            </tr>
            <tr className="bg-gradient-to-br from-emerald-900 to-gray-900 text-emerald-100">
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-400 rounded-full">
                  <Image
                      className="w-full h-full rounded-full"
                      src={SunsetIcon}
                      alt="Maghrib"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>
                      Maghrib
                    </p>
                    <p>صلاة المغرب</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 ">
                <p>{prayerTimes.maghribAzzan}</p>
              </td>
              <td className="px-5 py-5 ">
                <p>{prayerTimes.maghribIqamah}</p>
                  
              </td>
              <td className="px-5 py-5 ">
                
              </td>
              
            </tr>
            <tr className="bg-gradient-to-br from-emerald-900 to-gray-900 text-emerald-100">
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-400 rounded-full">
                  <Image
                      className="w-full h-full rounded-full"
                      src={NightSkyIcon}
                      alt="Isha"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>
                      Isha
                    </p>
                    <p>صلاة العشاء</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 ">
                <p>{prayerTimes.ishaAzzan}</p>
              </td>
              <td className="px-5 py-5 ">
                <p>{prayerTimes.ishaIqamah}</p>
                  
              </td>
              <td className="px-5 py-5 ">
              </td>
              
            </tr>
            <tr className='bg-gradient-to-br from-emerald-700 to-green-900 text-emerald-100'>
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16">
                  <Image
                      className="w-full h-full rounded-full"
                      src={NoonIcon}
                      alt="SunriseIcon"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>
                      Jummah (1st Salat)
                    </p>
                    <p>صَلَاة ٱلْجُمُعَة 1</p>
                  </div>
                </div>
              </td>
              <td colSpan={3}>
                <p className="px-5 py-5 ">01:00 PM</p>
              </td>
            </tr>
            <tr className='bg-gradient-to-br from-green-700 to-emerald-900 text-emerald-100'>
              <td className="p-2 ">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16">
                  <Image
                      className="w-full h-full rounded-full"
                      src={NoonIcon}
                      alt="SunriseIcon"
                    ></Image>
                  </div>
                  <div className="ml-3">
                    <p>
                      Jummah (2nd Salat)
                    </p>
                    <p>صَلَاة ٱلْجُمُعَة 2</p>
                  </div>
                </div>
              </td>
              <td colSpan={3}>
                <p className="px-5 py-5 ">02:00 PM</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>



</div> */}








        </section>

    )
}