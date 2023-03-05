// import React, { useState, useEffect } from 'react';
// import Image from "next/image"
// import FajrIcon from "public/Fajr.Icon.jpeg"
// import SunriseIcon from "public/Sunrise.Icon.png"
// import NoonIcon from "public/Noon.Icon.png"
// import AsrIcon from "public/Asr.Icon.png"
// import SunsetIcon from "public/Sunset.Icon.png"
// import NightSkyIcon from "public/Night.Sky.Icon.png"
// import getPrayerTimes from '@/components/getPrayerTimes';
// import CountDownTimer from './CountdownTimer';


// export default function PrayerTimes(){

//   const prayerTimes = getPrayerTimes()
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const hijriDate = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
  
// const todayLocaleDate = new Date().toLocaleDateString('en-ca', { weekday:"long", year:"numeric", month:"short", day:"numeric", timeZone: 'MST'})


//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);


//     return(
//         <section className="min-h-screen bg-gradient-to-br from-emerald-400 to-blue-300 px-10">
//             <div className="container mx-auto px-4 sm:px-8">
//   <div className='-my-36'>
//     <div className=''>
//       <h2 className="text-5xl font-semibold leading-tight">Prayer Times</h2>
//       <h6>{todayLocaleDate}, {time}</h6>
//       <h6>{hijriDate}</h6>
//     </div>
//     <div>
//     <CountDownTimer />
//     </div>
//     <div className="">
//       <div
//         className="inline-block min-w-full shadow-lg rounded-2xl overflow-hidden"
//       >
//         <table className="min-w-full leading-normal mosqueBg">
//           <thead>
//             <tr className='text-3xl bg-gradient-to-br from-emerald-600 to-blue-300 border-b-2 border-emerald-600 text-gray-900'>
//               <th
//                 className="p-5 text-left font-semibold uppercase tracking-wider"
//               >
//                 Prayer
//               </th>
//               <th
//                 className="px-5 py-3   text-left font-semibold uppercase tracking-wider"
//               >
//                 Adhaan
//               </th>
//               <th
//                 className="px-5 py-3  text-left font-semibold uppercase tracking-wider"
//               >
//                 Iqamah
//               </th>
//               <th
//                 className="px-5 py-3   text-left font-semibold uppercase tracking-wider"
//               >
                
//               </th>              
//             </tr>
//           </thead>
//           <tbody className='text-2xl'>
//             <tr className='bg-gradient-to-br from-emerald-900 to-gray-900 text-emerald-100'>
//               <td className="p-2 border-b border-gray-200">
//                 <div className="flex">
//                   <div className="flex-shrink-0 w-16 h-16">
//                     <Image
//                       className="w-full h-full rounded-full"
//                       src={FajrIcon}
//                       alt="FajrIcon"
//                     ></Image>
//                   </div>
//                   <div className="ml-3">
//                     <p>
//                       Fajr
//                     </p>
//                     <p>صلاة الفجر</p>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 <p >{prayerTimes.fajrAzzan}</p>                
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 <p >{prayerTimes.fajrIqamah}</p>
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 {/* <span
//                   className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
//                   ></span>
//                   <span className="relative">Paid</span>
//                 </span> */}
//               </td>
              
//             </tr>
//             <tr className='bg-white bg-opacity-90'>
//               <td className="p-2 border-b border-gray-200">
//                 <div className="flex">
//                   <div className="flex-shrink-0 w-16 h-16">
//                   <Image
//                       className="w-full h-full rounded-full"
//                       src={SunriseIcon}
//                       alt="SunriseIcon"
//                     ></Image>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-900 whitespace-no-wrap">
//                       Sunrise
//                     </p>
//                     <p className="text-gray-600 whitespace-no-wrap">الشروق</p>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.sunriseTime}</p>
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 {/* <span
//                   className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
//                   ></span>
//                   <span className="relative">Paid</span>
//                 </span> */}
//               </td>
              
//             </tr>
//             <tr className='bg-white bg-opacity-90'>
//               <td className="p-2 border-b border-gray-200 ">
//                 <div className="flex">
//                   <div className="flex-shrink-0 w-16 h-16">
//                   <Image
//                       className="w-full h-full rounded-full"
//                       src={NoonIcon}
//                       alt="NoonIcon"
//                     ></Image>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-900 whitespace-no-wrap">
//                       Dhuhr
//                     </p>
//                     <p className="text-gray-600 whitespace-no-wrap">صلاة الظهر</p>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.zohrAzzan}</p>
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.zohrIqamah}</p>
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 ">
//                 {/* <span
//                   className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
//                   ></span>
//                   <span className="relative">Pending</span>
//                 </span> */}
//               </td>
              
//             </tr>
//             <tr className="border-b border-gray-200 bg-white bg-opacity-90">
//               <td className="p-2 ">
//                 <div className="flex">
//                   <div className="flex-shrink-0 w-16 h-16 bg-blue-400 rounded-full">
//                   <Image
//                       className="w-full h-full rounded-full"
//                       src={AsrIcon}
//                       alt="AsrIcon"
//                     ></Image>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-900 whitespace-no-wrap">
//                       Asr
//                     </p>
//                     <p className="text-gray-600 whitespace-no-wrap">صلاة العصر</p>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-5 py-5 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.asrAzzan}</p>
//               </td>
//               <td className="px-5 py-5 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.asrIqamah}</p>
                  
//               </td>
//               <td className="px-5 py-5 ">
//                 {/* <span
//                   className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
//                   ></span>
//                   <span className="relative">Overdue</span>
//                 </span> */}
//               </td>
              
//             </tr>
//             <tr className="border-b border-gray-200 bg-white bg-opacity-90">
//               <td className="p-2 ">
//                 <div className="flex">
//                   <div className="flex-shrink-0 w-16 h-16 bg-blue-400 rounded-full">
//                   <Image
//                       className="w-full h-full rounded-full"
//                       src={SunsetIcon}
//                       alt="Maghrib"
//                     ></Image>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-900 whitespace-no-wrap">
//                       Maghrib
//                     </p>
//                     <p className="text-gray-600 whitespace-no-wrap">صلاة المغرب</p>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-5 py-5 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.maghribAzzan}</p>
//               </td>
//               <td className="px-5 py-5 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.maghribIqamah}</p>
                  
//               </td>
//               <td className="px-5 py-5 ">
//                 {/* <span
//                   className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
//                   ></span>
//                   <span className="relative">Overdue</span>
//                 </span> */}
//               </td>
              
//             </tr>
//             <tr className="border-b border-gray-200 bg-white bg-opacity-90">
//               <td className="p-2 ">
//                 <div className="flex">
//                   <div className="flex-shrink-0 w-16 h-16 bg-blue-400 rounded-full">
//                   <Image
//                       className="w-full h-full rounded-full"
//                       src={NightSkyIcon}
//                       alt="Isha"
//                     ></Image>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-900 whitespace-no-wrap">
//                       Isha
//                     </p>
//                     <p className="text-gray-600 whitespace-no-wrap">صلاة العشاء</p>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-5 py-5 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.ishaAzzan}</p>
//               </td>
//               <td className="px-5 py-5 ">
//                 <p className="text-gray-900 whitespace-no-wrap">{prayerTimes.ishaIqamah}</p>
                  
//               </td>
//               <td className="px-5 py-5 ">
//                 {/* <span
//                   className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
//                   ></span>
//                   <span className="relative">Overdue</span>
//                 </span> */}
//               </td>
              
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>



// </div>
// {/* <div className='z-10'>
//   <svg version="1.1" className=" absolute top-20 right-20 h-52 w-52 fill-gray-500" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
// 	 viewBox="0 0 48 48">
// <path d="M24,4C12.972,4,4,12.972,4,24s8.972,20,20,20s20-8.972,20-20S35.028,4,24,4z M28.561,30.561
// 	C28.268,30.854,27.884,31,27.5,31s-0.768-0.146-1.061-0.439l-5-5C21.158,25.279,21,24.898,21,24.5v-11c0-0.829,0.671-1.5,1.5-1.5
// 	s1.5,0.671,1.5,1.5v10.379l4.561,4.561C29.146,29.025,29.146,29.975,28.561,30.561z"/>
// </svg>
// </div> */}
//         </section>
//     )
// }