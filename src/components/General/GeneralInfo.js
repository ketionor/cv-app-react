import GeneralInfoForm from "./GeneralInfoForm";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GeneralInfoDisplay from "./GeneralInfoDisplay";

const GeneralInfo = ({ update, masterInfo }) => {
  return (
    <Container className="general-info-container">
      <h2>General Information</h2>
      {Object.keys(masterInfo.general).length === 0 ? (
        <GeneralInfoForm update={update} />
      ) : (
        <GeneralInfoDisplay masterInfo={masterInfo.general} />
      )}
    </Container>
  );
};

export default GeneralInfo;
