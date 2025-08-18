import { useLocation, useParams } from "react-router-dom";

export default function UserProfile() {
  const location = useLocation();
  const { user } = location.state || {}; 
  const { username } = useParams(); 

  if (!user) return <p>User data not found!</p>;

  return (
    <div>
      <h2>{user.fullname}</h2>
      <img src={user.photo} alt={user.fullname} />
      <p>Age: {user.age}</p>
    </div>
  );
}
