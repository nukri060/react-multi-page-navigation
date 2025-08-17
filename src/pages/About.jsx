import { Link } from "react-router-dom";

export default function About() {
    return (
        <> 
            <div className="about-page-wrapper">
                <h2>Hello, welcome to the about page!</h2>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}