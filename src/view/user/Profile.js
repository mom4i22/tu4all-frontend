import PageLayout from "@components/CommonComponents/Layout.js";
import EditProfile from "@components/ProfileComponents/EditProfile.js";
import "@styles/welcome.css";

const Profile = () => {
  return (
    <>
      <PageLayout inner={EditProfile} />
    </>
  );
};

export default Profile;
