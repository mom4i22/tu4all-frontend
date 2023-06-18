import { Card } from "antd";
import { useState } from "react";
import CalendarNot from "./CalendarNot";
import DragNDropMaterials from "./DragNDropMaterials";
const SubjectLayout = (props) => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div className="flex">
      <div className="w-1/3 mr-4">
        <Card title={props.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel dui
          accumsan, dictum justo a, finibus mauris. Suspendisse id risus at arcu
          posuere vehicula. Donec et erat sed felis varius pretium. Donec
          dignissim turpis ut tellus mollis fermentum. Nulla ac leo ultrices,
          posuere ex sit amet, sagittis mauris. Suspendisse potenti.
        </Card>
        <div className="mt-3">
          <DragNDropMaterials />
        </div>
      </div>
      <div className="w-1/3">
        <CalendarNot />
      </div>
    </div>
  );
};
export default SubjectLayout;
