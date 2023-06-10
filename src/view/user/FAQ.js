import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import '@styles/welcome.css';
import FAQComp from '@components/FAQComponents/FAQComp.js';
import PageLayout from '@components/CommonComponents/Layout.js';
import Post from '@components/FeedComponents/Post.js';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <PageLayout inner={FAQComp} />
    </>
  );
};

export default FAQ;
