import React from 'react'
import profilePic from '../assets/profile-pic.webp'
import { HERO_CONTENT } from '../constants/data'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-revers'>
                <div className='order-0 md:order-1 w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <motion.img
                            src={profilePic}
                            alt="Profile picture"
                            className='border border-stone-900 rounded-3xl'
                            width={650}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>
                <div className='order-1 md:order-0 w-full lg:w-1/2'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='flex flex-col items-center lg:items-start mt-10'
                    >
                        <motion.h2 variants={childVariants} className='pb-2 text-4xl font-semibold  tracking-tighter lg:text-8xl'>
                            Ravinder Kumar
                        </motion.h2>
                        <motion.span
                            variants={childVariants}
                            className='bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-4xl tracking-tight text-transparent my-2'
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={childVariants}
                            className="text-gray-300 my-5 text-lg md:text-xl leading-relaxed tracking-normal px-4 max-w-lg "
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            variants={childVariants}
                            href="/resume.pdf"
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mt-5 mb-10 hover:bg-gray-300 transition-bg duration-300'
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero