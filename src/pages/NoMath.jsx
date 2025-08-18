import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-message">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-home-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
