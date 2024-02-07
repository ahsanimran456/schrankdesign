import Layout from "../../../Layouts/FurnitureConfigurator/Layout"
import SubLayout from "../../../Layouts/FurnitureConfigurator/SubLayout"
import Accordian from "../../../components/furniture-configurator/Accordian"
import { DrawerAccordianAfter, DrawerAccordianBefore } from "../../../components/furniture-configurator/DrawerAccordian"


const Drawer = () => {
    const tabs = [
        {
            to: '/dashboard/furniture-configurator/drawer/home',
            label: 'Drawer'
        }
    ]
  return (
    <Layout>
        <SubLayout tabs={tabs}>
            <Accordian afterCollapse={<DrawerAccordianAfter/>} beforeCollapse={<DrawerAccordianBefore/>} />
        </SubLayout>
    </Layout>
  )
}

export default Drawer