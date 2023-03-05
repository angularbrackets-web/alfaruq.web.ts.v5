// import Link from "next/link";
// import Image from "next/image";
// import SunriseIcon from "public/Sunrise.Icon.png"
// import program1Image from 'public/Sunrise.Icon.png';
// import program2Image from 'public/Sunrise.Icon.png';
// import program3Image from 'public/Sunset.Icon.png';


// const programs = [
//   {
//     id: 1,
//     title: 'Program 1',
//     description: 'This is program 1 description',
//     image: program1Image,
//   },
//   {
//     id: 2,
//     title: 'Program 2',
//     description: 'This is program 2 description',
//     image: program2Image,
//   },
//   {
//     id: 3,
//     title: 'Program 3',
//     description: 'This is program 3 description',
//     image: program3Image,
//   },
// ];

// const ProgramsPage = () => {
//   return (
//     <section className="relative">
//     <div className="bg-gradient-to-br from-indigo-600 to-blue-500 min-h-screen">
//       <div className="w-full py-10 flex justify-center items-center">
//         <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
//           {programs.map((program) => (
//             <div
//               key={program.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden w-80 z-20"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={program.image}
//                   alt={program.title}
//                   objectFit="cover"
//                 objectPosition="center"
//                 layout="responsive"
//                 />
//               </div>
//               <div className="px-6 py-4">
//                 <h3 className="text-xl mb-2 font-bold">{program.title}</h3>
//                 <p className="text-gray-700 text-base">
//                   {program.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <svg
//         className="absolute top-0 right-0 h-full w-1/2 z-10 text-white"
//         viewBox="0 0 200 600"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <polygon points="0,0 200,0 0,600" />
//       </svg>
//       <svg
//         className="absolute top-0 left-0 h-full w-1/2 text-white"
//         viewBox="0 0 200 600"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <polygon points="200,0 200,600 0,600" />
//       </svg>
//     </div>
//     </section>
//   );
// };

// export default ProgramsPage;
