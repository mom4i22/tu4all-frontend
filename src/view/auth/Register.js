import RegisterForm from "@components/WelcomeComponents/RegisterForm.js";
import "@styles/welcome.css";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();

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
