import React from "react";
import "./coreTeam.scss";
import coreTeamMobileWeb from "../../../assets/png/MobileMockup.png";
import Button from "../../Button/Button";

const CoreTeam = () => {
  return (
    <div className="coreTeam">
      <div className="webAndMobileImg">
        <img
          className="coreTeamMobileImg"
          src={coreTeamMobileWeb}
          alt="coreTeamMobileImg"
        />
        <h1>Want to see what Crews can do for you?</h1>
        <div className="btnDiv">
          <Button title="Request a demo" type="primaryBig" />
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
