import React from "react";
import { useNavigate } from "react-router-dom";
import Post from '@components/FeedComponents/Post.js'
import Comment from '@components/FeedComponents/Comment.js'
import { useTranslation } from "react-i18next";
import "@styles/welcome.css";

const FeedPosts = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  let count = 0;

  const posts = [
    {
      key: 1,
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
      alias: "Annie Young",
      description: "Hello everyone! I'm happy to share a new bakery I found nearby uni! Go check it out and thank me later ;)",
      img: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      key: 2,
      avatar: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
      alias: "Annie Young",
      description: "Hello everyone! I'm happy to share a new bakery I found nearby uni! Go check it out and thank me later.Hello everyone! I'm happy to share a new bakery I found nearby uni! Go check it out and thank me laterHello everyone! I'm happy to share a new bakery I found nearby uni! Go check it out and thank me laterHello everyone! I'm happy to share a new bakery I found nearby uni! Go check it out and thank me later ;)",
      img: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
    },
    {
      key: 3,
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
      alias: "Annie Young",
      description: "Hello everyone! I'm happy to share a new bakery I found nearby uni! Go check it out and thank me later ;)",
      img: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ];

  const comments = [
    { id: 0, avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel", comment: "This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description", alias: "test" },
    { id: 1, avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel", comment: "This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description", alias: "Annie Young" },
    { id: 2, avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel", comment: "This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description", alias: "Annie Young" },
  ];

  const returnPosts = () => {
  console.log(props)
    return posts.map((post, index) => (
      <div key={post.key} className="mb-6 flex flex-col md:flex-row">
        <Post avatar={post.avatar} alias={post.alias} description={post.description} img={post.img} canEdit={props.canEdit} />
        <Comment comments={comments} canEdit={props.canEdit}/>
      </div>
    ));
  };

  return (
    <div key={count++} className="xs:w-full md:w-2/3 max-h-screen overflow-y-auto no-scrollbar">
      {returnPosts()}
    </div>
  );
};

export default FeedPosts;
