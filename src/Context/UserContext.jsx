import React, { createContext, useState, useContext } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../Authentication/Signing/config";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: localStorage.getItem("username"),
    email: localStorage.getItem("username"),
    signing: localStorage.getItem("signing"),
  });

  const signing = ({ username, email }) => {
    console.log({ username });
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("signing", true);
    setUser({
      email: email,
      signing: true,
      username: username,
    });
  };

  const logout = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("email", "");
    localStorage.setItem("signing", false);
    setUser({
      email: "",
      signing: false,
      username: "",
    });
    window.location.reload();
  };

  return (
    <UserContext.Provider value={{ user, signing, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
