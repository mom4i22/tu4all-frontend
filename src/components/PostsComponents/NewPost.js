import ProfilePicUpload from "@components/CommonComponents/ProfilePicUpload";
import PostsContext from "@services/PostsContext";
import "@styles/welcome.css";
import { Button, Card, Form, Input, Modal } from "antd";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
const { TextArea } = Input;
const { Meta } = Card;

const NewPost = (props) => {
  const { t } = useTranslation();
  const { show, toggleShow } = props;
  const { createPost, getUserPosts } = useContext(PostsContext);
  const [description, setDescription] = useState(props.description);
  const [profilePicFile, setProfilePicFile] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleProfilePicUpload = (picture) => {
    setProfilePicFile(picture);
  };
  const handleProfilePicRemove = (picture) => {
    setProfilePicFile(picture);
  };

  const handleSubmit = (e) => {
    createPost(description, profilePicFile).then((resp) => {
      if (resp.status === 200) {
        getUserPosts();
        setDescription("");
        setProfilePicFile(null);
        toggleShow();
      }
    });
  };
  return (
    <>
      <Modal
        centered
        title={<label className="text-customNavy">{t("posts_create")}</label>}
        className="createPostModal text-customNavy w-96"
        open={show}
        onCancel={toggleShow}
        footer={[
          <Button
            key="back"
            onClick={toggleShow}
            className="hover:border-customNavy bg-customCream text-customNavy"
          >
            {t("common_cancel")}
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleSubmit}
            className="bg-customNavy"
          >
            {t("posts_btnsubm")}
          </Button>,
        ]}
      >
        <Form className="mx-auto w-4/5">
          <Form.Item className="text-customNavy" name="description">
            <TextArea
              onChange={handleDescriptionChange}
              placeholder={t("posts_desc")}
              rows={4}
              allowClear
              maxLength={255}
            />
          </Form.Item>
          <Form.Item className="text-customNavy" name="pic">
            <div className="mx-auto w-1/2">
              <ProfilePicUpload
                handleProfilePicUpload={handleProfilePicUpload}
                handleProfilePicRemove={handleProfilePicRemove}
              />
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewPost;
