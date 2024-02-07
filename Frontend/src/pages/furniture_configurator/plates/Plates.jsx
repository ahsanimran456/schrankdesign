import Layout from "../../../Layouts/FurnitureConfigurator/Layout";
import SubLayout from "../../../Layouts/FurnitureConfigurator/SubLayout";
import Accordian from "../../../components/furniture-configurator/Accordian";
import { PlatesAccordianAfter, PlatesAccordianBefore } from "../../../components/furniture-configurator/PlatesAccordian";

const Plates = () => {
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
        <Accordian 
          afterCollapse={<PlatesAccordianAfter/>}
          beforeCollapse={<PlatesAccordianBefore/>}
        />
      </SubLayout>
    </Layout>
  );
};

export default Plates;
