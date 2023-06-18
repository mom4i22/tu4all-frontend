import {
  collection,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  getDocs,
  getDoc,
} from "firebase/firestore";

import { db } from "@root/firebase";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Avatar, Card, Tooltip, Button, Input } from "antd";
import { WechatFilled, CloseOutlined, SendOutlined } from "@ant-design/icons";
import FriendsGroup from "./FriendsGroup";
import FriendsContext from "@services/FriendsContext";
import { getUserAlias } from "store/auth";

const { Meta } = Card;
const { TextArea } = Input;

const ChatSection = () => {
  const [showChat, setShowChat] = useState(true);
  const [chat, setChat] = useState([]);
  const [friend, setFriend] = useState("");
  const [chatId, setChatId] = useState("");
  const [message, setMessage] = useState("");
  const [documentId1, setDocId1] = useState("");
  const [documentId2, setDocId2] = useState("");
  const [messages, setMessages] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const { myFriends, getFriends } = useContext(FriendsContext);
  const meUser = getUserAlias();

  async function checkDocumentExists(documentPath) {
    const documentRef = doc(db, documentPath);
    const documentSnapshot = await getDoc(documentRef);

    return documentSnapshot.exists();
  }

  const addIfChatExists = async (docPath, obj) => {
    try {
      const exists = await checkDocumentExists(docPath);
      if (exists) {
        const documentRef = doc(db, docPath);
        await updateDoc(documentRef, {
          chat: arrayUnion(obj),
        });
        setTrigger((tr) => (tr = !tr));
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    getFriends().then((resp) => {
      if (resp.length > 0) {
        handleDataFromChild(resp[0].alias);
      }
    });
  }, []);
  useEffect(() => {
    const messagesCollection = collection(db, "messages");
    getDocs(messagesCollection)
      .then((querySnapshot) => {
        console.log(documentId1, documentId2);
        const found = querySnapshot.docs.find(
          (doc) => doc.id === documentId1 || doc.id === documentId2
        );
        if (found) {
          setChat(found.data().chat);
          setChatId(found.id);
        } else {
          setChat([]);
          setChatId("");
        }
      })
      .catch((error) => {
        console.log("Error loading chats: ", error);
      });
  }, [friend, trigger]);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    let obj = {
      text: message,
      name: meUser,
      createdAt: Date.now(),
    };
    if (chatId) {
      const documentPath1 = `messages/${chatId}`;
      addIfChatExists(documentPath1, obj);
    } else {
      const documentPath1 = `messages/${meUser + "-" + friend}`;

      const documentRef1 = doc(db, documentPath1);

      await setDoc(
        documentRef1,
        {
          chat: [obj],
        },
        { merge: true }
      );
      setTrigger((tr) => (tr = !tr));
    }

    setMessage("");
  };

  const handleDataFromChild = (data) => {
    setFriend(data);
    setDocId1(meUser + "-" + data);
    setDocId2(data + "-" + meUser);
    setShowChat(true);
  };

  return (
    <div className="fixed sm:bottom-2 lg:bottom-36 md:bottom-20 right-4 md:ml-12 md:w-1/4">
      {showChat && (
        <FriendsGroup
          sendDataToParent={handleDataFromChild}
          friends={myFriends}
        />
      )}
      {chat && chat.length > 0 && showChat && (
        <div className="shadow-lg">
          <Card
            actions={[
              <div className="m-3 flex items-center" key="chat-input">
                <TextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=""
                  className="resize-none w-full p-2"
                  rows={2}
                />
                <SendOutlined
                  className="m-2"
                  onClick={(event) => sendMessage(event)}
                />
              </div>,
            ]}
          >
            <div className="overflow-y-auto h-64 md:h-52 no-scrollbar">
              {chat.map((convo, index) => (
                <div key={index}>
                  {meUser === convo.name ? (
                    <div style={{ textAlign: "right" }}>
                      <strong className="mr-4">{convo.name}</strong>
                      <div className="border-2 rounded-t-full rounded-bl-full m-2 w-fit ml-auto bg-customBeige">
                        <Card.Meta
                          className="p-2"
                          description={
                            <div>
                              <p style={{ textAlign: "right" }}>{convo.text}</p>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <strong className="ml-4 z-10">{convo.name}</strong>
                      <div className="border-2 rounded-t-full rounded-br-full m-2 w-fit flex justify-between bg-white">
                        <Card.Meta
                          className="p-2"
                          description={
                            <div>
                              <p>{convo.text}</p>
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
              <div className="m-3 flex items-center" key="chat-input">
                <TextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=""
                  allowClear
                  autoSize={{
                    minRows: 2,
                    maxRows: 3,
                  }}
                />
                <SendOutlined
                  className="m-2"
                  onClick={(event) => sendMessage(event)}
                />
              </div>,
            ]}
          >
            No chat convo
          </Card>
        </div>
      )}

      <Tooltip title={!showChat ? "open" : "close"}>
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
