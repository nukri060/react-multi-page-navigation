import { useParams, useNavigate, Link } from "react-router-dom";

export default function User() {
  const { user_name } = useParams(); 
  const navigate = useNavigate();

  return (
    <>
      <div className="user-page-wrapper">
        <h2>User Page</h2>
        <p>Welcome, <strong>{user_name}</strong>!</p>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact?ref=user-page">Contact</Link>
      </div>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
