import EducationInfoForm from "./EducationInfoForm";
import Container from "react-bootstrap/Container";
import EducationInfoDisplay from "./EducationInfoDisplay";
import { useState } from "react";

const EducationInfo = ({ props }) => {
  return (
    <Container fluid className="education-info-container">
      <EducationInfoForm props={props} />
      <EducationInfoDisplay
        masterInfo={props.masterInfo.education}
        deleteItem={props.deleteItem}
      />
    </Container>
  );
};

export default EducationInfo;
