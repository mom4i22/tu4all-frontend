import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HeartTwoTone, MessageTwoTone, SendOutlined, SaveTwoTone, DeleteTwoTone,CloseCircleTwoTone } from "@ant-design/icons";
import { Avatar, Card, Skeleton, Switch, Image, Input, Tooltip } from "antd";
import "@styles/welcome.css";
const { TextArea } = Input;
const { Meta } = Card;

const Post = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Card
        key={props.key}
        className="w-4/6 mr-0"
        actions={
          props.canEdit == "true" ? (
            [
             <Tooltip title={t("posts_delete")} placement="bottom">
              <DeleteTwoTone
                twoToneColor="#D80027"
              />
              </Tooltip>,
              <Tooltip title={t("posts_discard")} placement="bottom">
              <CloseCircleTwoTone
                twoToneColor="#888888"
              />
              </Tooltip>,
              <Tooltip title={t("posts_save")} placement="bottom">
              <SaveTwoTone twoToneColor="#99BB33"/>
              </Tooltip>,
            ]
          ) : (
            [
              <HeartTwoTone
                twoToneColor="#eb2f96"
                className="hover:motion-safe:animate-ping"
              />,
            ]
          )
        }
      >
        <Meta
          avatar={<Avatar src={props.avatar} />}
          title={props.alias}
          description={
            <div className="xs:max-w-xs">
            {props.canEdit != "true"? ( <p className="max-h-28 h-auto overflow-y-auto mb-3 text-md">
                                                       {props.description}
                                                     </p>):
                                                     (<TextArea value={props.description} autoSize className="mb-3"/>)}

              <Image className="max-w-xs rounded-xl" src={props.img} />
            </div>
          }
        />
      </Card>
    </>
  );
};

export default Post;
