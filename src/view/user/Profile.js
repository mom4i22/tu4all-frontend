import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import '@styles/welcome.css';
import EditProfile from '@components/ProfileComponents/EditProfile.js';
import PageLayout from '@components/CommonComponents/Layout.js';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <PageLayout inner={EditProfile} />
    </>
  );
};

export default Profile;
