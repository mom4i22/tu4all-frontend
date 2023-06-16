import { MehOutlined } from "@ant-design/icons";
import Comment from "@components/FeedComponents/Comment.js";
import Post from "@components/FeedComponents/Post.js";
import NewPost from "@components/PostsComponents/NewPost.js";
import PostsContext from "@services/PostsContext";
import { base64ToFile } from "@services/helpers";
import { Button, Result } from "antd";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "@styles/welcome.css";

const FeedPosts = (props) => {
  const { t } = useTranslation();
  const { posts, getTimelinePosts, getUserPosts } = useContext(PostsContext);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const togglePassword = () => {
    setShowChangePassword((p) => !p);
  };

  useEffect(() => {
    if (props.canEdit) {
      getUserPosts();
    } else {
      getTimelinePosts();
    }
  }, []);

  const returnPosts = () => {
    return posts && posts.length > 0 ? (
      posts.map((post) => (
        <div key={post.postId} className="mb-6 flex flex-col md:flex-row">
          <div className="w-2/5">
            <Post
              postId={post.postId}
              avatar={URL.createObjectURL(
                base64ToFile(post.creator.profilePicture)
              )}
              alias={post.creator.alias}
              description={post.text}
              img={URL.createObjectURL(base64ToFile(post.content))}
              canEdit={props.canEdit}
            />
          </div>
          <div className="w-3/5">
            <Comment
              comments={post.comments}
              canEdit={props.canEdit}
              postId={post.postId}
            />
          </div>
        </div>
      ))
    ) : (
      <div>
        <Result
          icon={<MehOutlined />}
          title={t("error_feed_empty")}
          extra={
            <Link to={"/friends"}>
              <Button className="bg-customBlue text-white">
                {t("nav_friends")}
              </Button>
            </Link>
          }
        />
      </div>
    );
  };

  return (
    <>
      {props.canEdit == "true" && (
        <div className="">
          <Button
            className="fixed bg-customRed text-white hover:border-customRed"
            onClick={togglePassword}
          >
            {t("posts_create")}
          </Button>
          <NewPost show={showChangePassword} toggleShow={togglePassword} />
        </div>
      )}
      <div className="xs:w-full md:w-3/4 lg:max-h-[47rem] md:max-h-[35rem] overflow-y-auto no-scrollbar mt-10">
        {returnPosts()}
      </div>
    </>
  );
};

export default FeedPosts;
