import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import { useEffect } from "react"
import { useLocation } from "react-router-dom" // Change this line
import Faq from "./pages/Faq"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import SingleProductCollection from "./pages/collections/SingleProductCollection"
import Login from "./pages/login/Login"
import SingleProduct from "./pages/product/SingleProduct"
import SingleQuality from "./pages/quality/SingleQuality"
import Register from "./pages/register/Register"
import SingleService from "./pages/service/SingleService"
import UserPrivateRoute from "./protected_routes/UserProtectedRoute"
import UserDashboard from "./pages/dashboard/user/UserDashboard"
import AdminPrivateRoute from "./protected_routes/AdminPrivateRoute"
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard"
import Profile from "./pages/dashboard/Profile"
import Users from "./pages/dashboard/admin/Users"
import Collections from "./pages/dashboard/admin/Collections"
import CreateUser from "./pages/dashboard/admin/CreateUser"
import UpdateUser from "./pages/dashboard/admin/UpdateUser"
import CreateCollection from "./pages/dashboard/admin/CreateCollection"
import UpdateCollection from "./pages/dashboard/admin/UpdateCollection"
import Products from "./pages/dashboard/admin/Products"
import CreateProduct from "./pages/dashboard/admin/CreateProduct"
import SuccessOrder from "./pages/Orders/SuccessOrder"
import FailedOrder from "./pages/Orders/FailedOrder"
import Orders from "./pages/dashboard/admin/Orders"
import DetailOrder from "./pages/dashboard/admin/DetailOrder"
import UserOrders from "./pages/dashboard/user/UserOrders"
import UserDetailOrder from "./pages/dashboard/user/UserDetailOrder"
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/checkout"
import Edge from "./pages/furniture_configurator/edge/Edge"
import Plates from "./pages/furniture_configurator/plates/Plates"
import PlateTypes from "./pages/furniture_configurator/plates/PlateTypes"
import Drawer from "./pages/furniture_configurator/assets/Drawer"
import General from "./pages/furniture_configurator/claculation/General"
import Material from "./pages/furniture_configurator/claculation/Material"
import TestPartList from "./pages/furniture_configurator/part-list/test-part-list"
import PartListAdd from "./pages/furniture_configurator/part-list/part-list-add"

function ScrollToTopOnPathChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <div className="App">
      <Toaster />
      <ScrollToTopOnPathChange /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Single Collections, Quality, Servie and Product */}
        <Route
          path="/collections/:slug"
          element={<SingleProductCollection />}
        />
        <Route path="/quality/:slug" element={<SingleQuality />} />
        <Route path="/service/:slug" element={<SingleService />} />
        <Route path="/products/:slug" element={<SingleProduct />} />

        {/* Register and Login */}
        <Route path="/pages/register" element={<Register />} />
        <Route path="/pages/login" element={<Login />} />

        {/* FAQ */}
        <Route path="/pages/faq" element={<Faq />} />
        <Route path="/pages/cart" element={<Cart />} />
        <Route path="/pages/checkout" element={<Checkout />} />
        {/* page not found url */}

        {/* Private User Route to check user authentication JWT */}
        <Route path="/dashboard" element={<UserPrivateRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<UserOrders />} />
          <Route path="user/orders/detail/:id" element={<UserDetailOrder />} />
          <Route path="user/orders/success" element={<SuccessOrder />} />
          <Route path="user/orders/failed" element={<FailedOrder />} />
        </Route>

        {/* Private Admin Route to check admin authentication JWT */}
        <Route path="/dashboard" element={<AdminPrivateRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/profile" element={<Profile />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/users/create" element={<CreateUser />} />
          <Route path="admin/users/update/:id" element={<UpdateUser />} />
          <Route path="admin/collections" element={<Collections />} />
          <Route
            path="admin/collections/create"
            element={<CreateCollection />}
          />
          <Route
            path="admin/collection/update/:id"
            element={<UpdateCollection />}
          />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/products/create" element={<CreateProduct />} />
          <Route path="admin/orders" element={<Orders />} />
          <Route path="admin/orders/detail/:id" element={<DetailOrder />} />


          {/* admin dashboard furniture-configurator   */}
          <Route path="furniture-configurator/plates/home" element={<Plates />} />
          <Route path="furniture-configurator/plates/plate-types" element={<PlateTypes />} />
          <Route path="furniture-configurator/edge/home" element={<Edge />} />
          <Route path="furniture-configurator/drawer/home" element={<Drawer />} />
          <Route path="furniture-configurator/calculation/home" element={<General />} />
          <Route path="furniture-configurator/calculation/material" element={<Material />} />
          <Route path="furniture-configurator/part-list/home" element={<PartListAdd />} />
          <Route path="furniture-configurator/part-list/test-part-list" element={<TestPartList />} />
        </Route>


        {/* old routes  */}

        {/* <Route path="/furniture-configurator">
          <Route path="plates/">
            <Route path="home" element={<Plates />} />
            <Route path="plate-types" element={<PlateTypes />} />
          </Route>
          <Route path="edge/">
            <Route path="home" element={<Edge />} />
          </Route>
          <Route path="drawer/">
            <Route path="home" element={<Drawer />} />
          </Route>
          <Route path="calculation/">
            <Route path="home" element={<General />} />
            <Route path="material" element={<Material />} />
          </Route>
          <Route path="part-list/">
            <Route path="home" element={<PartListAdd />} />
            <Route path="test-part-list" element={<TestPartList />} />
          </Route>
        </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div >
  )
}

export default App
