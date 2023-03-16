import Link from "next/link";
import Image from "next/image";
import SunriseIcon from "public/Sunrise.Icon.png"
import program1Image from 'public/Sunrise.Icon.png';
import program2Image from 'public/Noon.Icon.png';
import program3Image from 'public/Sunset.Icon.png';


const programs = [
  {
    id: 1,
    title: 'Da’wa / Islamic lectures',
    description: `
      <ul>
        <li>Conferences</li>
        <li>Seminars</li>
      </ul>
      <br />
      <p>We conduct Conferences and Seminars throughout the year. Check Events page for more information.</p>
    `,
    image: program1Image
  },
  {
    id: 2,
    title: 'Quran / Islamic Studies',
    description: `
    <p>
      We offer Quran and Islamic study programs for all age groups for both men and women.
    </p>
    `,
    image: program2Image
  },
  {
    id: 3,
    title: 'Youth Programs',
    description: `
    <ul>
        <li>Sports</li>
        <li>Camps</li>
      </ul>
    `,
    image: program3Image
  },
  {
    id: 4,
    title: 'Education',
    description: `
    <ul>
        <li>Homeschool</li>
        <li>Alberta Islamic School (coming up)
        </li>
        <li>Tutoring</li>
      </ul>
    `,
    image: program2Image
  }
  
]

export default function Programs() {
  return (
    <section id="Programs" className="min-h-screen angledBgSlateLight">
      <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-lime-500">Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map(program => (
          <div key={program.id} className="rounded-2xl angledBgDarkTeal2">
            <div className="w-full text-cyan-100 p-6 text-4xl md:text-4xl rounded-t-2xl">
              <h1>{program.title}</h1>
            </div>
            <div className=" text-lime-100 p-6 overflow-y-auto rounded-b-2xl min-h-[200px]"  dangerouslySetInnerHTML={{ __html: program.description}} />
          </div>
        ))}
      </div>
      </div>      
    </section>
  )
}
