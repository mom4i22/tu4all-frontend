import React  from 'react';
import { Drawer,Button, Form, Input } from 'antd';
import { useTranslation } from "react-i18next";

const Login = (props) => {
 const { t } = useTranslation();
const {show, toggleShow} = props
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  return (
    <>
      <Drawer placement="right" open={show} onClose={toggleShow} className="bg-customBlue text-white" >
      <div class="mt-1/2">

        <Form
        className="centerY"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<label className="text-white">{t("common_username")}</label>}
              name="username"
              rules={[
                {
                  required: true,
                  message: t("common_username_required"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="text-white"
              label={<label className="text-white">{t("common_password")}</label>}
              name="password"
              rules={[
                {
                  required: true,
                  message:  t("common_password_required"),
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="bg-customRed">
                {t("common_submit")}
              </Button>
            </Form.Item>
          </Form>
          </div>
      </Drawer>
    </>
  );
};
export default Login;
