import GeneralInfoForm from "./GeneralInfoForm";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import GeneralInfoDisplay from "./GeneralInfoDisplay";

const GeneralInfo = ({ props }) => {
  const checkInfo = () => {
    return Object.keys(props.masterInfo.general).length === 0;
  };

  const assignContainerClass = () => {
    if (checkInfo()) {
      return "general-info-container nothing-here";
    } else {
      return "general-info-container";
    }
  };

  return (
    <Container fluid className={assignContainerClass()}>
      {checkInfo() ? (
        <h3>Nothing here yet.</h3>
      ) : (
        <GeneralInfoDisplay masterInfo={props.masterInfo.general} />
      )}

      <GeneralInfoForm props={props} />
    </Container>
  );
};

export default GeneralInfo;
