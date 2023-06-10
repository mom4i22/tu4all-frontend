import React, { useState } from "react";
import { Avatar, Card, Tooltip, Button, Input } from "antd";
import { WechatFilled, CloseOutlined, SendOutlined } from "@ant-design/icons";
import FriendsGroup from "@components/CommonComponents/FriendsGroup";
import { useTranslation } from "react-i18next";

const { Meta } = Card;
const { TextArea } = Input;

const ChatSection = () => {
  const { t } = useTranslation();

  const [showChat, setShowChat] = useState(true);
  const [chat, setChat] = useState([]);

  const chats = [
    [
      {
        id: 1,
        sender: "john23",
        message: "Hello, how are you?",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
      },
      {
        id: 2,
        sender: "jane1",
        message: "I'm good, thanks! How about you?",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
      },
      {
        id: 3,
        sender: "john23",
        message: "I'm doing great, thanks for asking.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
      },
      {
        id: 4,
        sender: "jane1",
        message: "That's good to hear!",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
      }, {
        id: 5,
        sender: "john23",
        message: "What is the due date for the project?",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
      }, {
        id: 6,
        sender: "jane1",
        message: "I think its the 29th of July",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
      },
    ],
  ];

  const globalName = "jane1";

  const findSubArray = (arr, property, value) => {
    return arr.filter((subArr) => {
      if (Array.isArray(subArr)) {
        return subArr.some((obj) => obj[property] === value);
      } else {
        console.log("Given data is not an array");
        return [];
      }
    });
  };

  const handleDataFromChild = (data) => {
    const updatedChat = findSubArray(chats, "sender", data)[0];
    setChat(updatedChat || []);
    setShowChat(true);
  };

  return (
    <div className="fixed sm:bottom-2 lg:bottom-36 md:bottom-20 right-4 md:ml-12 md:w-1/4">
      {showChat && (<FriendsGroup sendDataToParent={handleDataFromChild}  />)}
      {chat && chat.length > 0 && showChat && (
        <div className="shadow-lg">
             <Card
               actions={[
                 <div className="m-3 flex items-center" key="chat-input">
                   <TextArea
                     placeholder=""
                     className="resize-none w-full p-2"
                     rows={2}
                   />
                   <SendOutlined className="m-2" />
                 </div>,
               ]}
             >
               <div className="overflow-y-auto h-64 md:h-52 no-scrollbar">
                 {chat.map((convo) => (
                   <div key={convo.id}>
                     {globalName === convo.sender ? (
                       <div style={{ textAlign: "right" }}>
                         <strong className="mr-4">{convo.sender}</strong>
                         <div className="border-2 rounded-t-full rounded-bl-full m-2 w-fit ml-auto bg-customBeige">
                           <Card.Meta
                             className="p-2"
                             description={
                               <div>
                                 <p style={{ textAlign: "right" }}>{convo.message}</p>
                               </div>
                             }
                           />
                         </div>
                       </div>
                     ) : (
                       <div>
                         <strong className="ml-4 z-10">{convo.sender}</strong>
                         <div className="border-2 rounded-t-full rounded-br-full m-2 w-fit flex justify-between bg-white">
                           <Card.Meta
                             className="p-2"
                             description={
                               <div>
                                 <p>{convo.message}</p>
                               </div>
                             }
                           />
                         </div>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </Card>
           </div>
      )}

      {(!chat || chat.length === 0) && showChat && (
        <div className="shadow-lg">
          <Card
            actions={[
              <div className="m-3 flex items-center" key="chat-input" >
                <TextArea
                  placeholder=""
                  allowClear
                  autoSize={{
                    minRows: 2,
                    maxRows: 3,
                  }}
                />
                <SendOutlined className="m-2" />
              </div>,
            ]}
          >
            {t("common_non_chat")}
          </Card>
        </div>
      )}

      <Tooltip title={!showChat ? t("common_open_chat") :  t("common_close_chat")}>
        <Button
          className="fixed bottom-4 right-4 bg-customRed w-14 h-14"
          type="primary"
          shape="circle"
          size="large"
          icon={
            !showChat ? (
              <WechatFilled style={{ fontSize: "26px" }} />
            ) : (
              <CloseOutlined style={{ fontSize: "26px" }} />
            )
          }
          onClick={() => setShowChat(!showChat)}
        />
      </Tooltip>
    </div>
  );
};

export default ChatSection;
