import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import "@styles/welcome.css";
import PageLayout from "@components/CommonComponents/Layout.js";
import FeedPosts from "@components/FeedComponents/FeedPosts.js";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const feedPostsProps = {
    canEdit: true,
  };

  return (
    <>
      <PageLayout inner={FeedPosts} canEdit="true" />
    </>
  );
};

export default Posts;
