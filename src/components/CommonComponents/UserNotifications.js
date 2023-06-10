import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FlagOutlined } from "@ant-design/icons";
import {
  Avatar,
  Card,
  Skeleton,
  Switch,
  Image,
  Input,
  Badge,
  Tooltip,
} from "antd";
import "@styles/welcome.css";
import en from "@images/en.png";
import bg from "@images/bg.png";
const { TextArea } = Input;
const { Meta } = Card;

const UserNotifications = (props) => {
  const { t, i18n } = useTranslation();
  let currentLang = "en";
  let likesCount = 23;
  let friendRequestCount = 12;
  const currentLangTern = () => {
    return i18n.language == "en" ? "bg" : "en";
  };
  const changeLanguageHandler = () => {
    currentLang = currentLangTern();
    i18n.changeLanguage(currentLang);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed right-8 ml-12 w-1/4 justify-items-end ">
        <div className="grid justify-items-end">
          <Card className="w-fit">
            <Meta
              avatar={
                <div className="flex justify-end">
                  <Tooltip title={t("notifications_fr_req")} placement="left">
                    <Badge count={99} overflowCount={10} className="mr-4">
                      <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        size={64}
                      />
                    </Badge>
                  </Tooltip>
                </div>
              }
              title={<strong className="text-right">Marina Yordanova</strong>}
              description={
                <div>
                  <Tooltip title={t("notifications_likes")} placement="bottom">
                    <Badge
                      count={likesCount ? 11 : 0}
                      showZero
                      color="#99BB33"
                      className="mr-2"
                    />
                  </Tooltip>
                  <Tooltip title={t("notifications_comm")} placement="bottom">
                    <Badge
                      count={friendRequestCount ? 25 : 0}
                      showZero
                      color="#faad14"
                      className="mr-2"
                    />
                  </Tooltip>
                  <Switch
                    className="bg-customBeige"
                    onChange={changeLanguageHandler}
                    unCheckedChildren={<img src={bg} className="w-5 h-5" />}
                    checkedChildren={
                      <img src={en} className="w-5 h-5 mt-0.5" />
                    }
                  />
                </div>
              }
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserNotifications;
