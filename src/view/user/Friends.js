import PageLayout from "@components/CommonComponents/Layout.js";
import FriendsTabs from "@components/FriendsComponents/FriendsTabs.js";
import "@styles/welcome.css";

const Friends = () => {
  return (
    <>
      <PageLayout inner={FriendsTabs} />
    </>
  );
};

export default Friends;
