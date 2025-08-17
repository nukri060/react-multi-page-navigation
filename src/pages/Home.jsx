import { Link } from "react-router-dom";

export default function Home() {
    return (
        <> 
            <div className="home-page-wrapper">
                <h2>Hello, welcome to the home page!</h2>
                <div className="links">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}