import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
const Dashboard = () => {
  const [user, setUser] = useState([]);
  const { fetchUser } = useAuth();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetchUser();
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h2>Protected Dashboard</h2>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};

export default Dashboard;
