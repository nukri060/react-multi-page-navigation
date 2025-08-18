import { useSearchParams, Link } from "react-router-dom";

export default function About() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic"); 

  let content;
  if (topic === "history") {
    content = <p>This is the history section of About.</p>;
  } else if (topic === "team") {
    content = <p>This is the team section of About.</p>;
  } else {
    content = <p>Welcome to the About page. Choose a topic!</p>;
  }

  return (
    <div className="about-page-wrapper">
      <h2>About Page</h2>
      {content}

      <div className="topics-list">
        <Link to="/about?topic=history">
          <button className={topic === "history" ? "active" : ""}>History</button>
        </Link>
        <Link to="/about?topic=team">
          <button className={topic === "team" ? "active" : ""}>Team</button>
        </Link>
        <Link to="/about">
          <button className={!topic ? "active" : ""}>Default</button>
        </Link>
      </div>
    </div>
  );
}
