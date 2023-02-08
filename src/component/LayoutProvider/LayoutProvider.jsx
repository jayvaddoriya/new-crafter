import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavHeader from "../NavHeader/NavHeader";

const LayoutProvider = () => {
  return (
    <div>
      <Layout>
        <NavHeader />
        <Navbar />
        <Content style={{ background: "#fff" }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default LayoutProvider;
