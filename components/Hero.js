import Image from "next/image"
import { DiReact, DiJavascript1, DiHtml5 } from "react-icons/di"
import { TbBrandNextjs } from "react-icons/tb"
import { IoLogoCss3 } from "react-icons/io"
import { SiTailwindcss } from "react-icons/si"
import { MdScreenshot } from "react-icons/md"

const Hero = () => {
  return (
    <div className='mx-auto'>
      <div className='absolute hidden -top-16 lg:block h-96'>
        <Image
          src='/images/hero.svg'
          layout='intrinsic'
          width={200}
          height={400}
        />
      </div>
      <div className='absolute hidden -top-16 right-8 lg:block h-96'>
        <Image
          src='/images/hero2.svg'
          layout='intrinsic'
          width={200}
          height={400}
        />
      </div>
      <div className='mb-20 text-center'>
        <p className='text-xl text-gray-300'>Hi, I am</p>
        <h1 className='text-4xl font-semibold text-teal-400'>Christophe</h1>
        <h2 className='text-3xl font-semibold text-gray-300'>Web Developer</h2>
      </div>
      <p className='mx-auto mb-10 text-xl text-center text-teal-400 md:w-4/6'>
        Welcome to my site.
        <br />{" "}
        <span className='text-gray-200'>
          I'm Christophe, front-end developer from Mexico.
        </span>{" "}
        <br />
      </p>
      <p className='w-5/6 mx-auto my-10 text-xl text-center text-gray-300 md:w-4/6'>
        <span className='font-semibold text-teal-400'>About me: </span>I have
        been studying web development since 2019, I'm currently enrolled in a
        Bachelor's Degree of Computer Science in the Guanajuato State University
        (2020 - 2024) - Mexico.
      </p>

      <h1 className='mb-10 text-3xl text-center text-teal-400'>
        My main skills:
      </h1>
      <div className='grid w-4/6 grid-cols-2 mx-auto'>
        <ul className='flex flex-col items-end justify-end gap-5 mb-10 text-xl text-right text-gray-300'>
          <li>JavaScript</li>
          <li>Reactjs</li>
          <li>Nextjs</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>Responsive design</li>
        </ul>
        <ul className='flex flex-col gap-3 ml-12 text-4xl text-teal-400'>
          <li>
            <DiJavascript1 />
          </li>
          <li>
            <DiReact />
          </li>
          <li>
            <TbBrandNextjs />
          </li>
          <li>
            <DiHtml5 />
          </li>
          <li>
            <IoLogoCss3 />
          </li>
          <li>
            <SiTailwindcss />
          </li>
          <li>
            <MdScreenshot />
          </li>
        </ul>
      </div>
      <h1 className='mb-10 text-4xl text-center text-teal-400'>
        Main projects:
      </h1>
    </div>
  )
}
export default Hero
