import SubLayout from "../../../Layouts/FurnitureConfigurator/SubLayout";
import Layout from "../../../Layouts/FurnitureConfigurator/Layout";
import Accordian from "../../../components/furniture-configurator/Accordian";
import { EdgeAccordianAfter, EdgeAccordianBefore } from "../../../components/furniture-configurator/EdgeAccordian";

const Edge = () => {
    const tabs = [
        {
            to: '/dashboard/furniture-configurator/edge/home',
            label: 'Edge'
        }
    ]
  return (
    <Layout>
      <SubLayout tabs={tabs}>
        <Accordian afterCollapse={<EdgeAccordianAfter/>} beforeCollapse={<EdgeAccordianBefore/>} />
      </SubLayout>
    </Layout>
  );
};

export default Edge;
