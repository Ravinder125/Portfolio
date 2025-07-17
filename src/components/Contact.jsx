import { Link } from "react-router-dom"
import { CONTACT } from "../constants/data"

const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <h2 className="my-10 text-center text-4xl">
                Get in touch
            </h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <p className="my-4">
                    {CONTACT.tel}
                </p>
                <Link to='#' className="underline">
                    {CONTACT.email}
                </Link>
            </div>
        </div>
    )
}

export default Contact