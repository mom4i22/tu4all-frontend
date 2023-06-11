import moment from "moment";
import { useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { faculties } from "@resources/constants.js";
import { useTranslation } from "react-i18next";
import ProfilePicUpload from "@components/CommonComponents/ProfilePicUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faculty, setFaculty] = useState("");
  const [facultyNumber, setFacultyNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profilePicFile, setProfilePicFile] = useState(null); // Initialize with null

  const changeName = (e) => setFullName(e.target.value);
  const changeFaculty = (value) => {
    setFaculty(value);
  };
  const changeFacNumber = (e) => setFacultyNumber(e.target.value);
  const changeDateOfBirth = (date) => setDateOfBirth(date.format("YYYY-MM-DD"));
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeNickname = (e) => setNickname(e.target.value);
  const handleProfilePicUpload = (picture) => {
    setProfilePicFile(picture);
  };
  const submitHandler = () => {
    const formData = new FormData();
    formData.append("alias", nickname); // Convert user object to string and append to FormData
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("dateOfBirth", moment(dateOfBirth).format("YYYY-MM-DD"));
    formData.append("faculty", faculty);
    formData.append("facultyNumber", facultyNumber);
    formData.append("profilePic", profilePicFile); // Add the profile picture file

    axios
      .post("http://localhost:8080/users/create-user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data); // Handle success response
        alert(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error); // Handle error
        alert(
          `${error}. Please try creating a user again later or with different data!`
        );
        navigate("/");
      });
  };

  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
      onFinish={submitHandler}
    >
      <Form.Item
        name="name"
        label={t("common_full_name")}
        rules={[
          {
            required: true,
            message: t("common_name_required"),
          },
        ]}
      >
        <Input onChange={changeName} />
      </Form.Item>
      <Form.Item
        name="email"
        label={t("common_email")}
        rules={[
          {
            required: true,
            type: "email",
            message: t("common_email_required"),
          },
        ]}
      >
        <Input onChange={changeEmail} />
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
        <Input onChange={changeNickname} />
      </Form.Item>

      <Form.Item
        className="text-white"
        label={<label>{t("common_password")}</label>}
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
        name="faculty"
        label={t("common_faculty")}
        rules={[
          {
            required: true,
            message: t("common_faculty_required"),
          },
        ]}
      >
        <Select options={faculties} onChange={changeFaculty} value={faculty} />
      </Form.Item>

      <Form.Item
        name="facultyNum"
        label={t("common_faculty_num")}
        rules={[
          {
            required: true,
            message: t("common_fac_num_required"),
          },
        ]}
      >
        <Input onChange={changeFacNumber} />
      </Form.Item>

      <Form.Item
        name="dateOfBirth"
        label={t("common_date_born")}
        rules={[
          {
            required: true,
            message: t("common_date_required"),
          },
        ]}
      >
        <DatePicker onChange={changeDateOfBirth} />
      </Form.Item>

      <Form.Item label={t("common_profile_pic_upl")}>
        <ProfilePicUpload handleProfilePicUpload={handleProfilePicUpload} />
      </Form.Item>
      <Form.Item className="absolute bottom-0 right-4">
        <Button type="primary" className="bg-customNavy" htmlType="submit">
          {t("common_submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
