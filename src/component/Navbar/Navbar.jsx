import { Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import crafter from "../../assets/svg/Crafter.svg";
import { NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";
import Link from "antd/es/typography/Link";

const linksItem = [
  {
    linkName: "Home",
    to: "/",
  },
  {
    linkName: "Demo",
    to: "/demo",
  },
  {
    linkName: "Features",
    to: "/features",
  },
  {
    linkName: "Pricing",
    to: "/pricing",
  },
  {
    linkName: "Blog",
    to: "/blog",
  },
  {
    linkName: "Use cases",
    to: "/useCases",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <Header className="header">
        <div className="logo">
          <img src={crafter} alt="crafter" />
        </div>
        <div className="allNavLinks">
          {linksItem.map((item) => (
            <NavLink
              exact
              to={item.to}
              className={({ isActive }) =>
                isActive ? "activeClassName" : "navLink"
              }
            >
              {item.linkName}
            </NavLink>
          ))}
        </div>
        <div className="hamBurgerMenu">
          <svg
            onClick={showDrawer}
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 40.5C8.3625 40.5 7.8285 40.284 7.398 39.852C6.966 39.4215 6.75 38.8875 6.75 38.25C6.75 37.6125 6.966 37.0785 7.398 36.648C7.8285 36.216 8.3625 36 9 36H45C45.6375 36 46.1715 36.216 46.602 36.648C47.034 37.0785 47.25 37.6125 47.25 38.25C47.25 38.8875 47.034 39.4215 46.602 39.852C46.1715 40.284 45.6375 40.5 45 40.5H9ZM9 29.25C8.3625 29.25 7.8285 29.034 7.398 28.602C6.966 28.1715 6.75 27.6375 6.75 27C6.75 26.3625 6.966 25.8277 7.398 25.3957C7.8285 24.9652 8.3625 24.75 9 24.75H45C45.6375 24.75 46.1715 24.9652 46.602 25.3957C47.034 25.8277 47.25 26.3625 47.25 27C47.25 27.6375 47.034 28.1715 46.602 28.602C46.1715 29.034 45.6375 29.25 45 29.25H9ZM9 18C8.3625 18 7.8285 17.7847 7.398 17.3542C6.966 16.9222 6.75 16.3875 6.75 15.75C6.75 15.1125 6.966 14.5778 7.398 14.1458C7.8285 13.7153 8.3625 13.5 9 13.5H45C45.6375 13.5 46.1715 13.7153 46.602 14.1458C47.034 14.5778 47.25 15.1125 47.25 15.75C47.25 16.3875 47.034 16.9222 46.602 17.3542C46.1715 17.7847 45.6375 18 45 18H9Z"
              fill="#424242"
            />
          </svg>
        </div>
      </Header>
      <Drawer
        placement="top"
        className="drawerMenu"
        closable={false}
        onClose={onClose}
        closeIcon={
          <svg
            onClick={onClose}
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00802 4.99439L16.5 13.4864L24.948 5.03839C25.1346 4.83977 25.3594 4.68088 25.6089 4.57125C25.8584 4.46162 26.1275 4.4035 26.4 4.40039C26.9835 4.40039 27.5431 4.63218 27.9557 5.04476C28.3682 5.45734 28.6 6.01691 28.6 6.60039C28.6051 6.87012 28.5551 7.13804 28.453 7.38773C28.3508 7.63742 28.1987 7.8636 28.006 8.05239L19.448 16.5004L28.006 25.0584C28.3686 25.4131 28.5812 25.8935 28.6 26.4004C28.6 26.9839 28.3682 27.5434 27.9557 27.956C27.5431 28.3686 26.9835 28.6004 26.4 28.6004C26.1196 28.612 25.8399 28.5652 25.5786 28.463C25.3172 28.3607 25.08 28.2052 24.882 28.0064L16.5 19.5144L8.03002 27.9844C7.84413 28.1764 7.62206 28.3297 7.37662 28.4354C7.13118 28.5411 6.86724 28.5972 6.60002 28.6004C6.01654 28.6004 5.45696 28.3686 5.04438 27.956C4.6318 27.5434 4.40002 26.9839 4.40002 26.4004C4.39489 26.1307 4.44493 25.8627 4.54708 25.6131C4.64922 25.3634 4.80131 25.1372 4.99402 24.9484L13.552 16.5004L4.99402 7.94239C4.63142 7.58766 4.4188 7.1073 4.40002 6.60039C4.40002 6.01691 4.6318 5.45734 5.04438 5.04476C5.45696 4.63218 6.01654 4.40039 6.60002 4.40039C7.12802 4.40699 7.63402 4.62039 8.00802 4.99439Z"
              fill="#363535"
            />
          </svg>
        }
        open={open}
      >
        <div className="mobileNavLinks">
          {linksItem.map((item) => (
            <NavLink
              exact
              to={item.to}
              className={({ isActive }) =>
                isActive ? "activeClassName" : "navLink"
              }
            >
              {item.linkName}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
