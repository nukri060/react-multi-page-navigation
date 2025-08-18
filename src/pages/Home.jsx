import { Link } from "react-router-dom";
import { UsersList } from "../components/usersList";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <section className="hero-section">
        <h1>Welcome to our <span>Community</span></h1>
        <p className="subtitle">Discover amazing people and connect with them</p>
        
        <div className="links">
          <Link to="/about">Explore Features</Link>
          <Link to="/about?topic=history">Our History</Link>
          <Link to="/about?topic=team">Meet the Team</Link>
          <Link to="/contact?ref=homepage">Get in Touch</Link>
        </div>
      </section>

      <section className="featured-users">
        <h2>Featured Members</h2>
        <div className="links">
          <Link to="/user/Alex">Alex's Profile</Link>
          <Link to="/user/Sarah">Sarah's Profile</Link>
        </div>
        <UsersList />
      </section>
    </div>
  );
}