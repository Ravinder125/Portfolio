import { motion } from "framer-motion"
import { PROJECTS } from "../constants/data"
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl "
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, idx) => (
                    <Link to={project.href} key={idx} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} image`}
                                width={250}
                                height={250}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 "
                        >
                            <h3 className="mb-2 font-semibold text-2xl">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="rounded bg-stone-900 p-2 tet-sm font-medium text-stone-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Projects