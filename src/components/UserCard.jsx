import { Link } from "react-router-dom";

export function UserCard({ fullname, age, photo }) {
  const formatNameForUrl = (name) => name.trim().replace(/\s+/g, "_");

  return (
    <div className="user-card">
      <img src={photo} alt={`${fullname} photo`} className="user-photo" />
      <div className="user-info">
        <Link
          to={`/user/${formatNameForUrl(fullname)}`}
          state={{ fullname, age, photo }}
          className="user-name-link"
        >
          {fullname}
        </Link>
        <p className="user-age">{age} years old</p>
      </div>
    </div>
  );
}
