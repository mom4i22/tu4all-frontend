import { Tabs } from "antd";
import { useState } from "react";
import SubjectLayout from "./SubjectLayout";
const SubjectsTabs = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Tabs
        tabPosition="left"
        items={[
          {
            label: "Linear Alegebra",
            key: "1",
            children: <SubjectLayout />,
          },
          {
            label: "Chemistry",
            key: "2",
            children: <SubjectLayout />,
          },
          {
            label: "Programming",
            key: "3",
            children: <SubjectLayout />,
          },
        ]}
      />
    </>
  );
};
export default SubjectsTabs;
