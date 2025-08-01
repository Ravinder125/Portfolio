import { motion } from 'framer-motion'
import { EXPERIENCE } from '../constants/data'


const Experience = () => {
    return (
        <div className='pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}

                className='my-20 text-center text-4xl '
            >
                Experience
            </motion.h2>
            <div>
                {EXPERIENCE.map((experience, idx) => (
                    <div
                        key={idx}
                        className='mb-8 flex flex-wrap lg:justify-center'
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:1/2'
                        >
                            <p className='mb-2 text-sm text-stone-400 uppercase'>
                                {experience.startDate} - {experience.endDate}
                            </p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'
                        >
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
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience