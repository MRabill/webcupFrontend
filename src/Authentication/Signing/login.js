import React from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "./config";

const signing = ({ setUser }) => {
  // signInWithPopup(auth, provider).then((data) => {
  //   console.log(data);
  //   setUser({
  //     email: data.user.email,
  //     name: data.user.displayName,
  //     photoURL: data.user.photoURL,
  //   });
  //   localStorage.setItem("email", data.user.email);
  //   localStorage.setItem("displayName", data.user.displayName);
  //   localStorage.setItem("photoURL", data.user.photoURL);
  // });
};
const logout = ({ setUser }) => {
  localStorage.removeItem("email");
  localStorage.removeItem("displayName");
  localStorage.removeItem("photoURL");
  setUser({
    email: "",
    name: "",
    photoURL: "",
  });
  window.location.reload();
};

export { signing, logout };
