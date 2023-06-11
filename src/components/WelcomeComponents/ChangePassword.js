import { Button, Modal, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ChangePasswordModal = (props) => {
  const { show, toggleShow } = props;
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeRetypedPassword = (e) => setRetypedPassword(e.target.value);

  const submitHandler = (e) => {
    const formData = new FormData();
    formData.append("password", password);
    if (password === retypedPassword) {
      axios
        .put(`http://localhost:8080/users/change-password/${email}`, formData)
        .then((response) => {
          console.log(response.data); // Handle success response
          alert(response.data);
        })
        .catch((error) => {
          console.error(error); // Handle error
          alert(
            `${error}. Please try again! If there is still a problem, wait a bit and refresh and then try again!`
          );
        });
    } else {
      alert("Passwords do not match! Try again!");
    }
    toggleShow();
  };

  return (
    <>
      <Modal
        centered
        title={
          <label className="text-white">{t("common_change_password")}</label>
        }
        className="modalStyle"
        open={show}
        onCancel={toggleShow}
        footer={[
          <Button
            key="back"
            onClick={toggleShow}
            className="hover:border-white text-white"
          >
            {t("common_cancel")}
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={submitHandler}
            className="bg-customRed"
          >
            {t("common_submit")}
          </Button>,
        ]}
      >
        <Form
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 13,
          }}
        >
          <Form.Item
            className="text-white"
            label={<label className="text-white">{t("common_email")}</label>}
            name="email"
            rules={[
              {
                required: true,
                message: t("common_email_required"),
              },
            ]}
          >
            <Input onChange={changeEmail} />
          </Form.Item>
          <Form.Item
            className="text-white"
            label={<label className="text-white">{t("common_password")}</label>}
            name="password"
            rules={[
              {
                required: true,
                message: t("common_password_required"),
              },
            ]}
          >
            <Input.Password onChange={changePassword} />
          </Form.Item>
          <Form.Item
            className="text-white"
            label={
              <label className="text-white">{t("common_password_re")}</label>
            }
            name="retypedPassword"
            rules={[
              {
                required: true,
                message: t("common_password_re_required"),
              },
            ]}
          >
            <Input.Password onChange={changeRetypedPassword} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ChangePasswordModal;
