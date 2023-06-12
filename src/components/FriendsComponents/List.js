import React, { useEffect, useState } from "react";
import { Avatar, Divider, List, Skeleton, Input, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next";

const ListComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [requested, setRequested] = useState([]);
  const [blocked, setBlocked] = useState([]);
  const [friends, setFriends] = useState([]);
  const { t } = useTranslation();

  const loadMoreData = () => {
    if (loading) {
      return;
    }

    setLoading(true);

    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setResults([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, [props.tab]);

  const search = (event) => {
    const searchWords = event.target.value;
    const res = data.filter((d) => {
      const name = d.name.first.toLowerCase();
      return name.startsWith(searchWords.toLowerCase());
    });

    setResults(res ? res : data);
  };

  const sendFriendRequest = (email) => {
    setRequested((prevReq) => [...prevReq, email]);
  };

  const unsendFriendRequest = (email) => {
    setRequested((prevReq) => prevReq.filter((friend) => friend !== email));
  };

  const blockUser = (email) => {
    setBlocked((prevBlocked) => [...prevBlocked, email]);
  };

  const unblockUser = (email) => {
    setBlocked((prevBlocked) =>
      prevBlocked.filter((friend) => friend !== email)
    );
  };

  const acceptRequest = (email) => {
    setFriends((prevFriends) => [...prevFriends, email]);
  };

  const declineRequest = (email) => {
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend !== email)
    );
  };

  const isUserRequested = (email) => {
    return requested.includes(email);
  };

  const isUserBlocked = (email) => {
    return blocked.includes(email);
  };

  const isFriend = (email) => {
    return friends.includes(email);
  };

  return (
    <div
      id="scrollableDiv"
      className="md:w-8/12 xl:w-3/4"
      style={{
        height: "600px",
        overflow: "auto",
        padding: "0 16px",
      }}
    >
      {(props.tab == 1 || props.tab == 2) && (
        <div style={{ position: "sticky", top: "0", zIndex: "10" }}>
          <Input
            className="w-1/3"
            placeholder={t("friends_type")}
            onInput={search}
          />
        </div>
      )}

      <InfiniteScroll
        dataLength={results.length}
        next={loadMoreData}
        hasMore={results.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={results}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.first}</a>}
                description={item.email}
              />
              {props.tab == 2 && (
                <div>
                  {isUserBlocked(item.email) ? (
                    <Button
                      className="btn btn-primary bg-gray-400 hover:border-gray-300 text-white font-semibold"
                      onClick={() => unblockUser(item.email)}
                    >
                      {t("friends_unblock")}
                    </Button>
                  ) : (
                    <>
                      <Button
                        className="btn btn-secondary border-customRed text-customRed font-semibold hover:bg-customRed hover:text-white mr-3"
                        onClick={() => blockUser(item.email)}
                      >
                        {t("friends_block")}
                      </Button>
                      <Button
                        className="btn btn-primary bg-customNavy text-white font-semibold"
                        onClick={() => blockUser(item.email)}
                      >
                        {t("friends_remove")}
                      </Button>
                    </>
                  )}
                </div>
              )}
              {props.tab == 1 && (
                <div>
                  {isUserRequested(item.email) ? (
                    <Button
                      className="btn btn-primary bg-customRed/60 hover:border-customRed text-white font-semibold"
                      onClick={() => unsendFriendRequest(item.email)}
                    >
                      {t("friends_unsend_req")}
                    </Button>
                  ) : (
                    <Button
                      className="btn btn-primary bg-customBlue/80 text-white font-semibold"
                      onClick={() => sendFriendRequest(item.email)}
                    >
                      {t("friends_send_req")}
                    </Button>
                  )}
                </div>
              )}
              {props.tab == 3 && (
                <div>
                  {!isFriend(item.email) && (
                    <>
                      <Button
                        className="btn btn-primary border-green-500 bg-green-500 text-white font-semibold hover:bg-green-500 hover:text-white mr-3"
                        onClick={() => acceptRequest(item.email)}
                      >
                        {t("friends_accept")}
                      </Button>
                      <Button
                        className="btn btn-secondary bg-customRed hover:border-customRed text-white font-semibold"
                        onClick={() => declineRequest(item.email)}
                      >
                        {t("friends_decline")}
                      </Button>
                    </>
                  )}
                </div>
              )}
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ListComponent;
