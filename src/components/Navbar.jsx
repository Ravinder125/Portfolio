import { Link } from "react-router-dom"
import logo from '../assets/raviKumarLogo.webp'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"

const Navbar = () => {
    const navItems = [
        {
            href: "https://www.linkedin.com/in/ravinder-kumar-683397357/",
            label: "LinkeDin",
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
            href: "",
            label: "Instagram",
            icon: <FaInstagram />
        },
    ]
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <Link to='/' aria-label="Home">
                    <img src={logo} />
                </Link>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 sm:gap-8 text-2xl hover:text-gray-100 transition-text duration-300">
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