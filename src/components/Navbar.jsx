import { Link } from "react-router-dom"
import logo from '../assets/logo.webp'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { HugeiconsIcon } from '@hugeicons/react';
import { FIVERR_SVG } from '../constants/data'

const fiverSvg = `<a href="https://iconscout.com/icons/fiverr" class="text-underline font-size-sm" target="_blank">Fiverr</a> by <a href="https://iconscout.com/contributors/pixel-icons" class="text-underline font-size-sm" target="_blank">Pixel Icons</a>`

const Navbar = () => {
    const navItems = [
        {
            href: "https://www.linkedin.com/in/ravinder-kumar-5080173a3/",
            label: "LinkedIn",
            icon: <FaLinkedin />
        },
        {
            href: "https://github.com/Ravinder125/",
            label: "GitHub",
            icon: <FaGithub />
        },
        {
            href: "https://leetcode.com/u/ravinder125/",
            label: "LeetCode",
            icon: <SiLeetcode />
        },
        {
            href: "https://www.instagram.com/",
            label: "Instagram",
            icon: <FaInstagram />
        },
        {
            href: "https://www.fiverr.com/this_is_rk/convert-figma-to-html-react-or-react-with-api",
            label: "Fiverr",
            icon: <span dangerouslySetInnerHTML={{ __html: FIVERR_SVG }} />
        },
    ]
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <Link to='/' aria-label="Home">
                    <img src={logo} />
                </Link>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 sm:gap-8 text-lg xl:text-2xl hover:text-gray-100 transition-text duration-300">
                {navItems.map((item) => (
                    <div key={item.label}>
                        <Link
                            className="flex gap-4 items-center hover:text-gray-400 transition-text duration-300"
                            to={item.href}
                            target="_blank"
                            aria-label={item.label}>
                            <span className="hidden sm:block">{item.label}</span>
                            {item.icon} {" "}
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar