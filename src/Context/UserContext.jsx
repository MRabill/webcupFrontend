import React, { createContext, useState, useContext } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../Authentication/Signing/config";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: localStorage.getItem("uid"),
    email: localStorage.getItem("email"),
    name: localStorage.getItem("displayName"),
    photoURL: localStorage.getItem("photoURL"),
  });

  const signing = () => {
    // signInWithPopup(auth, provider).then((data) => {
    //   console.log(data);
    //   setUser({
    //     uid: data.user.uid,
    //     email: data.user.email,
    //     name: data.user.displayName,
    //     photoURL: data.user.photoURL,
    //   });
    //   localStorage.setItem("uid", data.user.uid);
    //   localStorage.setItem("email", data.user.email);
    //   localStorage.setItem("displayName", data.user.displayName);
    //   localStorage.setItem("photoURL", data.user.photoURL);
    // });
  };
  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("email");
    localStorage.removeItem("displayName");
    localStorage.removeItem("photoURL");
    setUser({
      uid: "",
      email: "",
      name: "",
      photoURL: "",
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
