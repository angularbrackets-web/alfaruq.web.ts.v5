// import Link from "next/link";
// import Image from "next/image";
// import SunriseIcon from "public/Sunrise.Icon.png"


// const programs = [
//   {
//     title: "Beginner's Yoga",
//     description: "A beginner's guide to yoga practice",
//     imageUrl: {SunriseIcon},
//   },
//   {
//     title: "Strength Training",
//     description: "Learn how to build your strength and fitness",
//     imageUrl: {SunriseIcon},
//   },
//   {
//     title: "Cardio Workout",
//     description: "Get your heart pumping with our cardio workouts",
//     imageUrl: {SunriseIcon},
//   },
// ];

// const Programs = () => {
//   return (
//     <section>
//       <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//         <div className="py-16 px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
//             Programs
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
//             {programs.map((program, index) => (
//               <div
//                 key={index}
//                 className="bg-white overflow-hidden shadow rounded-lg"
//               >
//                 <div className="relative pt-4 pb-16 px-4 sm:px-6 lg:px-8">
//                   <img
//                     className="absolute h-full w-full object-cover"
//                     src={program.imageUrl}
//                     alt=""
//                   />
//                   <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
//                   <div className="absolute inset-0 p-4 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">
//                         {program.title}
//                       </h3>
//                       <p className="mt-2 text-gray-200">
//                         {program.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <svg
//         className="absolute top-0 w-full h-48 text-white"
//         fill="currentColor"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <polygon points="0,0 100,0 0,100" />
//       </svg>
//       <svg
//         className="absolute bottom-0 w-full h-48 text-white"
//         fill="currentColor"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <polygon points="0,100 100,0 100,100" />
//       </svg>
//       </section>
//   );
// };

// export default Programs;
