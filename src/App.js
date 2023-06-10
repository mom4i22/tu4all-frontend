import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./view/auth/Welcome.js";
import Register from "./view/auth/Register.js";
import Feed from "./view/user/Feed.js";
import Friends from "./view/user/Friends.js";
import Posts from "./view/user/Posts.js";
import Profile from "./view/user/Profile.js";
import FAQ from "./view/user/FAQ.js";
import "./resources/style/common.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
};

export default App;
