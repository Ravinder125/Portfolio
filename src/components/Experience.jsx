import React from 'react'
import { EXPERIENCE } from '../constants/data'

const Experience = () => {
    return (
        <div className='pb-4'>
            <h2 className='my-20 text-center text-4xl '>Experience</h2>
            <div>
                {EXPERIENCE.map((experience, idx) => (
                    <div
                        key={idx}
                        className='mb-8 flex flex-wrap lg:justify-center'
                    >
                        <div className='w-full lg:1/2'>
                            <p className='mb-2 text-sm text-stone-400 uppercase'>
                                {experience.startDate} - {experience.endDate}
                            </p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h3 className='mb-2 font-semibold'>
                                {experience.role} {" - "}
                                <span className='text-sm text-stone-500'>{experience.company}</span>
                            </h3>
                            <p className='mb-4 text-stone-400'>
                                {experience.description}
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {experience.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className='rounded bg-stone-900 px-2 py-1  text-sm font-medium text-stone-300'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience