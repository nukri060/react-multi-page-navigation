import { useLocation, useParams, useNavigate } from "react-router-dom";

export default function UserProfile() {
  const { state } = useLocation();
  const { username } = useParams();
  const navigate = useNavigate();

  if (!state) return <p>User data not found!</p>;

  const { fullname, age, photo } = state;

  return (
    <div className="user-profile-wrapper">
      <div className="profile-header">
        <img 
          src={photo} 
          alt={`${fullname} photo`} 
          className="user-profile-photo"
        />
        <div className="profile-badge">
          <span>⭐ Premium Member</span>
        </div>
      </div>
      
      <div className="profile-info">
        <h2>{fullname}</h2>
        <p className="username">@{username.replace('_', '').toLowerCase()}</p>
        
        <div className="stats">
          <div className="stat-item">
            <span className="stat-value">{age}</span>
            <span className="stat-label">Age</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">24</span>
            <span className="stat-label">Friends</span>
          </div>
        </div>
      </div>
      <div className="links">
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}