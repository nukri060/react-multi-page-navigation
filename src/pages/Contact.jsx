import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const ref = searchParams.get("ref");

  const navigate = useNavigate();

  return (
    <>
      <h2>{ref ? `Came from: ${ref}` : "Contact Page"}</h2>

      <form className="contact-form">
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

      <button onClick={() => navigate("/")}>Go to Home Programmatically</button>
    </>
  );
}
