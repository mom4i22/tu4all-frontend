import PageLayout from "@components/CommonComponents/Layout.js";
import FeedPosts from "@components/FeedComponents/FeedPosts.js";
import "@styles/welcome.css";

const Posts = () => {
  return (
    <>
      <PageLayout inner={FeedPosts} canEdit="true" />
    </>
  );
};

export default Posts;
