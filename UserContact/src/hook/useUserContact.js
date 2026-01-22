import { useState, useEffect } from "react";
const useUserContact = () => {
  const apiUrl = "https://fack-json.onrender.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(apiUrl);
      const users = await response.json();
      setUsers(users);
    };
    fetchApi();
  }, []);

  // Create User
  const postUser = async (newUser) => {
    const userRequest = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const savedUser = userRequest.json();
    setUsers((prev) => [...prev, savedUser]);
  };
  // Delete User
  const delteUser = async (id) => {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  //   Update Data
  const updateUser = async (id, updateData) => {
    const updateResuest = await fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });

    if (!updateResuest.ok) {
      throw new console.error("Update failed");
      ;
    }
    const updatedUser = await updateResuest.json();
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? updatedUser : user)),
    );
  };

  return { users, postUser, delteUser, updateUser };
};

export default useUserContact;
