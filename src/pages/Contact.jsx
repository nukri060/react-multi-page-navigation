import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";


export default function Contact() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ref = queryParams.get("ref");


    return (
        <>
            <h2>
                {ref ? `Came from: ${ref}` : "Contact Page"}
            </h2>

            <form action="" className="contact-form">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="name-field" />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea className="message-field" />
                </div>
            </form>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </>
    )
}