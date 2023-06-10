import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangePasswordModal = (props) => {
  const { show, toggleShow } = props;
  const { t } = useTranslation();

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
            onClick={toggleShow}
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
            label={<label className="text-white">{t("common_password")}</label>}
            name="password"
            rules={[
              {
                required: true,
                message: t("common_password_required"),
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className="text-white"
            label={
              <label className="text-white">{t("common_password_re")}</label>
            }
            name="password"
            rules={[
              {
                required: true,
                message: t("common_password_required"),
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ChangePasswordModal;
