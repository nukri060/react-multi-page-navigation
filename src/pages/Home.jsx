import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="home-page-wrapper">
                <h2>Hello, welcome to the home page!</h2>
                <div className="links">
                    <Link to="/about">About</Link>
                    <Link to="/contact?ref=homepage">Contact from Homepage</Link>
                    <Link to="/contact?ref=dist">Contact from Dist</Link>
                </div>
                <div className="links">
                    <Link to="/user/Alex">Alex Page</Link>
                    <Link to="/user/Sarah">Sarah Page</Link>
                </div>
            </div>
        </>
    )
}