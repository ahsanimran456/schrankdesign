import React from 'react'
import Layout from '../../../Layouts/FurnitureConfigurator/Layout'
import SubLayout from '../../../Layouts/FurnitureConfigurator/SubLayout'
import Accordian from '../../../components/furniture-configurator/Accordian';
import { PartListAccordianAfter, PartListAccordianBefore } from '../../../components/furniture-configurator/PartListAccordian';

const PartListAdd = () => {
    const tabs = [
        {
          to: "/dashboard/furniture-configurator/part-list/home",
          label: "Part-List-ADD",
        },
        {
          to: "/dashboard/furniture-configurator/part-list/test-part-list",
          label: "Test-Part-List",
        },
      ];
  return (
    <Layout>
        <SubLayout tabs={tabs}>
            <Accordian beforeCollapse={<PartListAccordianBefore/>} afterCollapse={<PartListAccordianAfter/>} />
        </SubLayout>
    </Layout>
  )
}

export default PartListAdd