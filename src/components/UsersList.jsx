import { useState, useEffect } from "react";
import { UserCard } from "./UserCard";

export function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&nat=us,gb,fr,es,ca")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          const mappedUsers = data.results.map((user) => ({
            fullname: `${user.name.first} ${user.name.last}`,
            age: user.dob.age,
            photo: user.picture.large,
          }));
          setUsers(mappedUsers);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="users-list">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="user-card-skeleton">
          <div className="skeleton-photo"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="users-list">
      {users.map((user, index) => (
        <UserCard
          key={index}
          fullname={user.fullname}
          age={user.age}
          photo={user.photo}
        />
      ))}
    </div>
  );
}