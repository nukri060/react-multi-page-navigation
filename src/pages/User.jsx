import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function User() {
    const { username } = useParams();

    return (
        <>
            <div className="user-page-wrapper">
                <h2>User Page</h2>
                <p>Welcome, <strong>{username}</strong>!</p>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact?ref=user-page">Contact</Link>
            </div>
        </>
    );
}
