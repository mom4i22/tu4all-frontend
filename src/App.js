import { getAuthToken } from "@services/auth.js";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "@styles/common.css";
import Register from "@views/auth/Register.js";
import Welcome from "@views/auth/Welcome.js";
import FAQ from "@views/user/FAQ.js";
import Feed from "@views/user/Feed.js";
import Friends from "@views/user/Friends.js";
import Posts from "@views/user/Posts.js";
import Profile from "@views/user/Profile.js";
import { AppProvider as PostsProvider } from "@services/PostsContext";
import { AppProvider as CommentsProvider } from "@services/CommentsContext";
import { AppProvider as FriendsProvider } from "@services/FriendsContext";
import { AppProvider as UserProvider } from "@services/UserContext";

const PrivateRoute = ({ path }) => {
  return getAuthToken() ? <Outlet /> : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <PostsProvider>
      <CommentsProvider>
        <FriendsProvider>
          <UserProvider>
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
          </UserProvider>
        </FriendsProvider>
      </CommentsProvider>
    </PostsProvider>
  );
};

export default App;
