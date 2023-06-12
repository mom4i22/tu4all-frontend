import PageLayout from "@components/CommonComponents/Layout.js";
import FeedPosts from "@components/FeedComponents/FeedPosts.js";
import "@styles/welcome.css";

const Feed = () => {
  return (
    <>
      <PageLayout inner={FeedPosts} />
    </>
  );
};

export default Feed;
