import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";
import React from "react";

const friends = [
  {
    id: 1,
    alias: "User 1",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
    status: "friend",
  },
  {
    id: 2,
    alias: "john23",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
    status: "blocked",
  },
  {
    id: 3,
    alias: "User 3",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",
    status: "friend",
  },
  {
    id: 4,
    alias: "User 4",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=4",
    status: "blocked",
  },
  {
    id: 5,
    alias: "User 5",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=5",
    status: "friend",
  },
  {
    id: 6,
    alias: "User 6",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=6",
    status: "blocked",
  },
  {
    id: 7,
    alias: "User 7",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=7",
    status: "friend",
  },
  {
    id: 8,
    alias: "User 8",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
    status: "blocked",
  },
  {
    id: 9,
    alias: "User 9",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
    status: "friend",
  },
  {
    id: 10,
    alias: "User 10",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",
    status: "blocked",
  },
  {
    id: 11,
    alias: "User 11",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=4",
    status: "friend",
  },
  {
    id: 12,
    alias: "User 12",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=5",
    status: "blocked",
  },
  {
    id: 13,
    alias: "User 13",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
    status: "friend",
  },
  {
    id: 14,
    alias: "User 14",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",
    status: "blocked",
  },
  {
    id: 15,
    alias: "User 15",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
    status: "friend",
  },
];

const FriendsGroup = (props) => {
  const sendDataToParent = (alias) => {
    props.sendDataToParent(alias);
  };

  const renderAvatars = () => {
    return friends.map((friend) => (
      <Avatar
        key={friend.id}
        src={friend.avatar}
        alt={friend.alias}
        className="cursor-pointer"
        onClick={() => sendDataToParent(friend.alias)}
      />
    ));
  };

  return (
    <>
      <Avatar.Group
        maxCount={10}
        maxPopoverPlacement="bottom"
        size="large"
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
          cursor: "pointer",
        }}
      >
        {renderAvatars()}
      </Avatar.Group>
    </>
  );
};

export default FriendsGroup;
