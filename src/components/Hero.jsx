import React from 'react'
import profilePic from '../assets/profile-pic.webp'
import { HERO_CONTENT } from '../constants/data'

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-revers'>
                <div className='order-0 md:order-1 w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <img
                            src={profilePic}
                            alt="Profile picture"
                            className='border border-stone-900 rounded-3xl'
                        />
                    </div>
                </div>
                <div className='order-1 md:order-0 w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10'>
                        <h2 className='pb-2 text-4xl font-semibold  tracking-tighter lg:text-8xl'>
                            Ravinder Kumar
                        </h2>
                        <span className='bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-4xl tracking-tight text-transparent my-2'>
                            Full Stack Developer
                        </span>
                        <p className="text-gray-300 my-5 text-lg md:text-xl leading-relaxed tracking-normal px-4 max-w-lg ">
                            {HERO_CONTENT}
                        </p>
                        <a
                            href="/resume.pdf"
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mt-5 mb-10 hover:bg-gray-300 transition-bg duration-300'
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero