import Layout from "../../../Layouts/FurnitureConfigurator/Layout"
import SubLayout from "../../../Layouts/FurnitureConfigurator/SubLayout"

const General = () => {
    const tabs = [
        {
            to: '/dashboard/furniture-configurator/calculation/home',
            label: 'General'
        },
        {
            to: '/dashboard/furniture-configurator/calculation/material',
            label: 'Material'
        }
    ]
    return (
        <Layout>
            <SubLayout tabs={tabs}>
                Hello
            </SubLayout>
        </Layout>
    )
}

export default General