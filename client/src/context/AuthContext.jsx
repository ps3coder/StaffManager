import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("email")) || null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  const updateUser = (data) => {
    // console.log(data);
    setCurrentUser(data);
  };

  const logout = () => {
    setCurrentUser(null);
  };
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("email", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("email");
    }
  }, [currentUser]);

  console.log(localStorage.getItem("email"));
  return (
    <AuthContext.Provider value={{ currentUser, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
