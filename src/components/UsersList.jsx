import { UserEl } from "./userEl";
import { useState, useEffect } from "react";

export function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&nat=us,gb,fr,es,ca")
      .then((res) => res.json())
      .then((data) => {
        const mappedUsers = data.results.map((user) => ({
          fullname: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          photo: user.picture.medium,
        }));
        setUsers(mappedUsers);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="users-list">
      {users.map((user, index) => (
        <UserEl
          key={index}
          name={user.fullname}
          age={user.age}
          photo={user.photo}
        />
      ))}
    </div>
  );
}