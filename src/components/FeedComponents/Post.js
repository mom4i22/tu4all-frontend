import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HeartTwoTone,
  MessageTwoTone,
  SendOutlined,
  SaveTwoTone,
  DeleteTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Skeleton,
  Switch,
  Image,
  Input,
  Tooltip,
  Popconfirm,
} from "antd";
import "@styles/welcome.css";
import axios from "axios";
import { getAuthToken } from "store/auth";

import PostsContext from "@services/PostsContext";
import { useContext } from "react";

const { TextArea } = Input;
const { Meta } = Card;

const Post = (props) => {
  const { t } = useTranslation();
  const [description, setDescription] = useState(props.description);
  const { deletePost, editPost, getUserPosts, likePost, unlikePost } =
    useContext(PostsContext);
  const [isLiked, setIsLiked] = useState(false);

  const clickPost = (id) => {
    if (!isLiked) likePost(id);
    else unlikePost(id);
    setIsLiked(!isLiked);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const submitEditHanlder = (description) => {
    editPost(description, props.postId).then((resp) => {
      if (resp.status === 200) {
        getUserPosts();
      }
    });
  };

  const submitDeleteHandler = (postId) => {
    deletePost(postId).then((resp) => {
      if (resp.status === 200) {
        getUserPosts();
      }
    });
  };

  return (
    <>
      <Card
        key={props.key}
        className="mr-0 "
        actions={
          props.canEdit == "true"
            ? [
                <Popconfirm
                  placement="top"
                  title={t("posts_delete")}
                  description={t("posts_delete_pop")}
                  onConfirm={() => submitDeleteHandler(props.postId)}
                  // onCancel={cancel}
                  okText={t("common_yes")}
                  cancelText={t("common_no")}
                >
                  <DeleteTwoTone twoToneColor="#D80027" />
                </Popconfirm>,
                <Tooltip title={t("posts_discard")} placement="bottom">
                  <CloseCircleTwoTone
                    twoToneColor="#888888"
                    onClick={() => setDescription(props.description)}
                  />
                </Tooltip>,
                <Tooltip title={t("posts_save")} placement="bottom">
                  <SaveTwoTone
                    twoToneColor="#99BB33"
                    onClick={() => {
                      submitEditHanlder(description);
                    }}
                  />
                </Tooltip>,
              ]
            : [
                <HeartTwoTone
                  twoToneColor={isLiked ? "#1E90FF" : "#eb2f96"}
                  className="hover:motion-safe:animate-ping"
                  onClick={() => clickPost(props.postId)}
                />,
              ]
        }
      >
        <Meta
          avatar={<Avatar src={props.avatar} />}
          title={props.alias}
          description={
            <div className="xs:max-w-xs">
              {props.canEdit != "true" ? (
                <p className="max-h-28 h-auto overflow-y-auto mb-3 text-md">
                  {props.description}
                </p>
              ) : (
                <TextArea
                  value={description}
                  placeholder={t("posts_edit_desc")}
                  onChange={changeDescription}
                  autoSize
                  className="mb-3"
                />
              )}

              <Image
                className="max-w-xs lg:max-w-md rounded-xl"
                src={props.img}
              />
            </div>
          }
        />
      </Card>
    </>
  );
};

export default Post;
