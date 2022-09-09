import Image from "next/image"
import Link from "next/link"
import { BiExit } from "react-icons/bi"

const Projects = () => {
  return (
    <div className='mt-16 text-center'>
      <h1 className='text-3xl font-semibold text-teal-400'>Epic Grill</h1>
      <p className='my-10 text-xl text-gray-300'>
        Landing page for (fictitious) restaurant "Epic Grill"
      </p>
      <p className='mb-12 text-xl text-gray-300'>
        <span className='text-teal-400'>Sections:</span> Landing page
      </p>
      <div className='relative p-2 overflow-hidden hover:brightness-110 hover:cursor-pointer transition-all duration-500 ease-in-out border-2 border-gray-500 w-5/6 md:w-4/6 mx-auto rounded-sm hover:scale-[1.01] hover:transform'>
        <a href='https://epicgrill.netlify.app/' target='_blank'>
          <Image
            src='/images/grill.jpg'
            width={1000}
            height={550}
            layout='intrinsic'
          />
        </a>
      </div>
      <div className='flex items-center justify-center gap-2 my-4 text-teal-500'>
        <a href='https://epicgrill.netlify.app/' target='_blank'>
          <p className='hover:text-teal-400'>Visit site</p>
        </a>
        <span>
          <BiExit />
        </span>
      </div>
      <p className='my-6 text-xl text-gray-300'>
        Built with:{" "}
        <span className='text-teal-400'>React, CSS. Optimisation pending</span>
      </p>
    </div>
  )
}
export default Projects
