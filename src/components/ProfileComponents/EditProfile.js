import React, { useState } from 'react';
import { Form, Input,
                              Button,
                              DatePicker,
                              Select,
                            } from 'antd';
import { faculties } from "@resources/constants.js";
import { useTranslation } from "react-i18next";
import ProfilePicUpload from '@components/CommonComponents/ProfilePicUpload';

const EditProfile = () => {
  const { t } = useTranslation();

  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    // Perform your API request or data update logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div     className="w-4/5">
    <Form
    labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
      layout="horizontal"
    >
      <Form.Item  name='name' label={t("common_full_name")}
      rules={[
        {
          required: true,
          message: t("common_name_required"),
        },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item  name='email' label={t("common_email")}
      rules={[
        {
          required: true,
          type:'email',
          message: t("common_email_required"),
        },
      ]}>
        <Input />
      </Form.Item>
       <Form.Item
        label={<label>{t("common_username")}</label>}
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
        label={<label >{t("common_password")}</label>}
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

      <Form.Item name='faculty' label={t("common_faculty")}
      rules={[
        {
          required: true,
          message: t("common_faculty_required"),
        },
      ]}
      >
        <Select options={faculties}>
        </Select>
      </Form.Item>

    <Form.Item name='facultyNum' label={t("common_faculty_num")}
      rules={[
      {
        required: true,
        message: t("common_fac_num_required"),
      },
      ]}>
        <Input />
      </Form.Item>

      <Form.Item name='dateOfBirth' label={t("common_date_born")}
      rules={[
      {
        required: true,
        message: t("common_date_required"),
      },
      ]}
      >
        <DatePicker />
      </Form.Item>

     <Form.Item label={t("common_profile_pic_upl")}>
       <ProfilePicUpload />
     </Form.Item>
        <Form.Item className="text-center" wrapperCol={{ span: 14, offset: 6 }}>
        <Button type="primary" className="bg-customNavy">{t("common_submit")}</Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default EditProfile;
