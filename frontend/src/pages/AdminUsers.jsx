import React, { useEffect, useState } from "react";

const AdminUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://velora-p3lg.onrender.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      setUsers(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>👥 Registered Users</h1>

      <br />

      {users.length === 0 ? (

        <h3>No Users Found</h3>

      ) : (

        users.map((user) => (

          <div
            key={user._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >

            <h3>{user.name}</h3>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Role:</strong> {user.role}
            </p>

          </div>

        ))

      )}

    </div>

  );

};

export default AdminUsers;