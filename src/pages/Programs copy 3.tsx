// import Link from "next/link";
// import Image from "next/image";
// import SunriseIcon from "public/Sunrise.Icon.png"
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
//   {
//     id: 4,
//     title: 'Program 4',
//     description: 'Description for program 4',
//     image: program2Image
//   },
//   {
//     id: 5,
//     title: 'Program 5',
//     description: 'Description for program 5',
//     image: program3Image
//   },
  
// ]

// export default function Programs() {
//   return (
//     <section className="min-h-screen container mx-auto bg-gradient-to-br from-teal-900 to-emerald-600 text-emerald-100">
      
//       <h1 className="text-3xl font-bold mb-8">Programs</h1>






//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
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
//     </section>
//   )
// }
