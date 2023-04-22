import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoaderIndex from "./components/loaders";
import AOS from "aos";
import "aos/dist/aos.css";
import EditProductIndex from "./screens/Dashboard/pages/editProduct/index";
import {
  Layout,
  ProductList,
  Details,
  Cart,
  News,
  Contact,
  Register,
  Login,
  PlaceOrder,
  Checkout,
  ProtectRoute,
  ProtectAdmin,
  Profile,
  Payment,
  Order,
  Search,
  Success,
} from "./screens";

import {
  LayoutList,
  Statistics,
  AdminProductList,
  OrderList,
  ProfileList,
  Customers,
  EditUser,
} from "./screens/Dashboard/pages";

const LazyHome = React.lazy(() => import("./screens/Home"));

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Routes>
        <Route exact path="/Success" element={<Success />}></Route>
        <Route exact path={"/"} element={<Layout />}>
          <Route
            exact
            path=""
            element={
              <React.Suspense fallback={<LoaderIndex />}>
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route path="avada/product" element={<ProductList />} />
          <Route path="avada/product/:id" element={<Details />} />
          <Route path="avada/cart" element={<Cart />} />
          <Route path="avada/cart/:id" element={<Cart />} />
          <Route path="auto-news" element={<News />} />
          <Route path="avada/contact" element={<Contact />} />
          <Route path="avada/profile" element={<Profile />} />
          <Route path="search" element={<Search />} />

          <Route
            path="billing"
            element={
              <ProtectRoute>
                <Checkout />
              </ProtectRoute>
            }
          />
          <Route
            path="payment"
            element={
              <ProtectRoute>
                <Payment />
              </ProtectRoute>
            }
          />
          <Route
            path="order/:id"
            element={
              <ProtectRoute>
                <Order />
              </ProtectRoute>
            }
          />
          <Route
            path="placeorder"
            element={
              <ProtectRoute>
                <PlaceOrder />
              </ProtectRoute>
            }
          />

          <Route path="auth/signin" element={<Login />} />
          <Route path="auth/signup" element={<Register />} />
        </Route>

        <Route exact path={"/avada/dashboard/"} element={<LayoutList />}>
          <Route exact path="statistics" element={<Statistics />} />
          <Route exact path="product" element={<AdminProductList />} />
          <Route exact path="order" element={<OrderList />} />
          <Route exact path="profile" element={<ProfileList />} />
          <Route exact path="product/:id" element={<EditProductIndex />} />
          <Route exact path="users" element={<Customers />} />
          <Route exact path="users/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </>
  );
}
