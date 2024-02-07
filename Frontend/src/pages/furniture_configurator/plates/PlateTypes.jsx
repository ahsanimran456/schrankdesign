import Layout from "../../../Layouts/FurnitureConfigurator/Layout";
import SubLayout from "../../../Layouts/FurnitureConfigurator/SubLayout";
import {
  PlatesTypeAccordianAfter,
  PlatesTypeAccordianBefore,
} from "../../../components/furniture-configurator/PlatesTypeAccordian";
import Accordian from "../../../components/furniture-configurator/Accordian";

const PlateTypes = () => {
  const tabs = [
    {
      to: "/dashboard/furniture-configurator/plates/home",
      label: "Plates",
    },
    {
      to: "/dashboard/furniture-configurator/plates/plate-types",
      label: "Plate-Types",
    },
  ];

  return (
    <Layout>
      <SubLayout tabs={tabs}>
        <div className="flex flex-col gap-10 overflow-auto">
          <Accordian
            afterCollapse={<PlatesTypeAccordianAfter />}
            beforeCollapse={<PlatesTypeAccordianBefore index="1" />}
          />
          <Accordian
            afterCollapse={<PlatesTypeAccordianAfter  />}
            beforeCollapse={<PlatesTypeAccordianBefore index="2"/>}
          />
        </div>
      </SubLayout>
    </Layout>
  );
};

export default PlateTypes;
