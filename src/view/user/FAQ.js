import PageLayout from "@components/CommonComponents/Layout.js";
import FAQComp from "@components/FAQComponents/FAQComp.js";
import "@styles/welcome.css";

const FAQ = () => {
  return (
    <>
      <PageLayout inner={FAQComp} />
    </>
  );
};

export default FAQ;
