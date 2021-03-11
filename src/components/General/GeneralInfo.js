import GeneralInfoForm from "./GeneralInfoForm";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import GeneralInfoDisplay from "./GeneralInfoDisplay";

const GeneralInfo = ({ update, masterInfo, showModal, toggleVisibility }) => {
  return (
    <Container className="general-info-container">
      <h2>General Information</h2>
      <GeneralInfoDisplay masterInfo={masterInfo.general} />
      <GeneralInfoForm
        update={update}
        showModal={showModal}
        toggleVisibility={toggleVisibility}
      />
    </Container>
  );
};

export default GeneralInfo;
