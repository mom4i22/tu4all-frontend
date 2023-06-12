import { getAuthToken } from "@services/auth.js";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./resources/style/common.css";
import Register from "./view/auth/Register.js";
import Welcome from "./view/auth/Welcome.js";
import FAQ from "./view/user/FAQ.js";
import Feed from "./view/user/Feed.js";
import Friends from "./view/user/Friends.js";
import Posts from "./view/user/Posts.js";
import Profile from "./view/user/Profile.js";

const PrivateRoute = ({ path }) => {
  return getAuthToken() ? <Outlet /> : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
