import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { username } = useParams();

  return (
    <div className="user-page-wrapper">
      <h2>User Page</h2>
      <p>Welcome, <strong>{username}</strong>!</p>
    </div>
  );
}
