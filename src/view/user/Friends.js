import {React, useState}  from 'react';
import { useTranslation } from "react-i18next";
import {Button} from 'antd'
import '@styles/welcome.css'
import PageLayout from '@components/CommonComponents/Layout.js'
import FriendsTabs from '@components/FriendsComponents/FriendsTabs.js'
import { useNavigate } from "react-router-dom";

const Friends = ()=> {
  const { t } = useTranslation();
   const navigate = useNavigate();


  return (
  <>

    <PageLayout inner={FriendsTabs}/>
    </>
  );
}

export default Friends;