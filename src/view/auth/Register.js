import { React, useState } from "react";
import { Card } from "antd";
import "@styles/welcome.css";
import RegisterForm from "@components/WelcomeComponents/RegisterForm.js";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();

  const [nickname, setNickname] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faculty, setFaculty] = useState("");
  const [facultyNumber, setFacultyNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        className="bg-customCream/90"
        title={t("welcome_signup")}
        bordered={false}
        style={{
          width: 700,
        }}
      >
        <RegisterForm />
      </Card>
    </div>
  );
};

export default Register;
