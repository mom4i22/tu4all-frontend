import {React, useState}  from 'react';
import { useTranslation } from "react-i18next";
import {Button} from 'antd'
import '@styles/welcome.css'
import  FeedPosts from '@components/FeedComponents/FeedPosts.js'
import PageLayout from '@components/CommonComponents/Layout.js'
import Post from '@components/FeedComponents/Post.js'
import { useNavigate } from "react-router-dom";

const Feed = ()=> {
  const { t } = useTranslation();
   const navigate = useNavigate();


  return (
  <>

    <PageLayout inner={FeedPosts}/>
    </>
  );
}

export default Feed;
