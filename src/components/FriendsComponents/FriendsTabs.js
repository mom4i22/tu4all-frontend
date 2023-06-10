import React from 'react';
import { Tabs } from 'antd';
import List from '@components/FriendsComponents/List.js';
import { useTranslation } from 'react-i18next';

const { TabPane } = Tabs;

const FriendsTabs = () => {
  const { t } = useTranslation();

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: t('friends_search'),
      children: <List tab="1" />,
    },
    {
      key: '2',
      label: t('friends_my_friends'),
      children: <List tab="2" />,
    },
    {
      key: '3',
      label: t('friends_req'),
      children: <List tab="3"/>,
    },
  ];

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="w-screen h-full">
      {items.map((item) => (
        <Tabs.TabPane tab={item.label} key={item.key}>
          {item.children}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default FriendsTabs;
