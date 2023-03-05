// import Carousel from "./Carousel";
// import Image from "next/image";
// import masjidVectorImage from "public/mosque.vector.1.png";
// import donateImage from "public/glassjar.donate.png";
// import program1Image from 'public/Sunrise.Icon.png';
// import program2Image from 'public/Noon.Icon.png';
// import program3Image from 'public/Sunset.Icon.png';
// const programs = [
//   {
//     id: 1,
//     title: 'Program 1',
//     description: 'Description for program 1',
//     image: program1Image
//   },
//   {
//     id: 2,
//     title: 'Program 2',
//     description: 'Description for program 2',
//     image: program2Image
//   },
//   {
//     id: 3,
//     title: 'Program 3',
//     description: 'Description for program 3',
//     image: program3Image
//   },
  
  
// ]

// const HomePage = () => {
//   return (
//     <section className="min-h-screen">
//     <Carousel
//       slides={[
//         <div className="hero min-h-screen bg-topleft-teal bgTealBlueGradient bg-bottomright-white">
//                         <div className="container mx-auto flex flex-col md:flex-row items-center">
//                             <div className="text-center md:text-left mb-6 md:mb-0">
//                                 <h1 className="text-6xl font-bold mb-6 text-teal-900">Welcome to Our Mosque</h1>
//                                 <p className="text-green-900 text-xl mb-8">Join us for daily prayers, weekly programs, community events and much more.</p>
//                                 <a href="#services" className="bg-blue-900 text-gray-200 px-5 py-3 rounded-lg hover:bg-blue-500 hover:text-gray-200">Learn More</a>
                                
//                                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//         {programs.map(program => (
//           <div key={program.id}>
//             {/* <div className="relative h-80">
//               <Image src={program.image} alt={program.title} layout="fill" objectFit="cover" />
//             </div>
//             <h2 className="text-2xl font-bold my-4">{program.title}</h2>
//             <p className="text-gray-600">{program.description}</p> */}

// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <Image className="rounded-t-lg h-56 object-cover" src={program.image} alt={program.title} ></Image>
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{program.title}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{program.description}</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//             <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//         </a>
//     </div>
// </div>

//           </div>
//         ))}
//       </div>


//                             </div>
//                             <div className="w-full md:w-4/5 lg:w-2/3 xl:w-2/5 md:ml-auto">
//                                 <Image src={masjidVectorImage} alt='masjid' ></Image>
//                             </div>
//                         </div>
//                     </div>
//         ,
//         <div className="hero min-h-screen bg-topleft-teal bgYellowGrayGradient bg-bottomright-white">
//                         <div className="container mx-auto flex flex-col md:flex-row items-center">                            
//                             <div className="text-center md:text-left mb-6 md:mb-0">
//                                 <h1 className="text-6xl font-bold mb-6">Donate Generously</h1>
//                                 <p className="text-gray-600 text-xl mb-8">Support our mosque and help us spread the word of Allah</p>
//                                 <a href="#" className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-900 hover:text-blue-300">Donate Now</a>
//                             </div>
//                             <div className="w-full md:w-4/5 lg:w-2/3 xl:w-2/5 md:ml-auto">
//                             <Image src={donateImage} alt='donate' ></Image>
//                             </div>
//                         </div>
//                     </div>
//       ]}
//     />
//     </section>
//   );
// };

// export default HomePage;
