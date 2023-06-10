import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HeartTwoTone, MessageTwoTone, SendOutlined, DeleteTwoTone } from "@ant-design/icons";
import { Avatar, Card, Skeleton, Switch, Image, Input, Tooltip, Divider } from "antd";
import "@styles/welcome.css";
const { TextArea } = Input;
const { Meta } = Card;

const Comment = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const globalUser = "test";

  const renderComments = () => {
    return props.comments.map((comment, index) => (
      <div className="text-sm mt-3" key={comment.id}>
        <Meta
          className="m-2"
          avatar={<Avatar src={comment.avatar} />}
          title={<p className="text-sm">{comment.alias}</p>}
          description={<p>{comment.comment}</p>}
        />
        {comment.alias === globalUser && props.canEdit === 'true' && (
          <Tooltip title={t("posts_delete")} placement="bottom">
            <Divider orientation="right">
              <DeleteTwoTone className="ml-3 pb-1/2" twoToneColor="#D80027" />
            </Divider>
          </Tooltip>
        )}
      </div>
    ));
  };

  return (
    <div className="ml-4">
      <Card
        className="w-full max-h-2/3 overflow-y-auto"
        actions={[
          <div className="m-2 flex items-center">
            <TextArea
              placeholder=""
              allowClear
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
            <SendOutlined className="m-2" />
          </div>,
        ]}
      >
        <div className="h-52 overflow-y-auto">{renderComments()}</div>
      </Card>
    </div>
  );
};

export default Comment;
