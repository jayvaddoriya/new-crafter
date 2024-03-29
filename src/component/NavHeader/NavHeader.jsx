import React from "react";
import Button from "../Button/Button";
import "./navHeader.scss";

const NavHeader = () => {
  return (
    <div className="navHeader">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.8333 13.0003C23.8333 7.02033 18.98 2.16699 13 2.16699C7.01996 2.16699 2.16663 7.02033 2.16663 13.0003C2.16663 18.9803 7.01996 23.8337 13 23.8337C18.98 23.8337 23.8333 18.9803 23.8333 13.0003ZM13 16.0228V14.0837H9.74996C9.15413 14.0837 8.66663 13.5962 8.66663 13.0003C8.66663 12.4045 9.15413 11.917 9.74996 11.917H13V9.97783C13 9.49033 13.585 9.25199 13.9208 9.59866L16.9433 12.6212C17.16 12.8378 17.16 13.1737 16.9433 13.3903L13.9208 16.4128C13.8444 16.4877 13.7476 16.5383 13.6425 16.5582C13.5375 16.5781 13.4288 16.5665 13.3304 16.5248C13.2319 16.4831 13.148 16.4132 13.0892 16.3238C13.0304 16.2345 12.9993 16.1298 13 16.0228Z"
          fill="#8C0019"
        />
      </svg>
      <div className="innerDiv">
        <Button title="Schedule now" />
      </div>
    </div>
  );
};

export default NavHeader;
