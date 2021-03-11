import EducationInfoForm from "./EducationInfoForm";
import Container from "react-bootstrap/Container";
import EducationInfoDisplay from "./EducationInfoDisplay";
import { useState } from "react";

const EducationInfo = ({ props }) => {
  const checkInfo = () => {
    return props.masterInfo.education.length === 0;
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
        <EducationInfoDisplay
          masterInfo={props.masterInfo.education}
          deleteItem={props.deleteItem}
        />
      )}

      <EducationInfoForm props={props} />
    </Container>
  );
};

export default EducationInfo;
