import GeneralInfoForm from "./GeneralInfoForm";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import GeneralInfoDisplay from "./GeneralInfoDisplay";

const GeneralInfo = ({ props }) => {
  return (
    <Container fluid className="general-info-container">
      <h2>General Information</h2>
      <GeneralInfoDisplay masterInfo={props.masterInfo.general} />
      <GeneralInfoForm props={props} />
    </Container>
  );
};

export default GeneralInfo;
