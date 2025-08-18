import { Link } from "react-router-dom";

export function UserEl({ name, age, photo }) {
  const user = {name, age, photo}
  const formatNameForUrl = (fullName) => {
    return fullName.trim().replace(/\s+/g, "_");
  };

  return (
    <div className="user-card">
      <img src={photo} alt="user photo" className="user-photo" />
      <div className="user-info">
        <Link
          to={`/user/${formatNameForUrl(name)}`}
          state={{user}}
          className="username"
        >
          {name}
        </Link>
        <p className="age">{age} years old</p>
      </div>
    </div>
  );
}
