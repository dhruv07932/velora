import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );


  const login = (userData) => {

    setUser(userData);

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(userData)
    );

  };


  const logout = () => {

    setUser(null);

    localStorage.removeItem("loggedUser");

    localStorage.removeItem("token");

  };


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;