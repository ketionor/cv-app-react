import EducationInfoForm from "./EducationInfoForm";
import Container from "react-bootstrap/Container";
import EducationInfoDisplay from "./EducationInfoDisplay";
import { useState } from "react";

const EducationInfo = ({ update, masterInfo, toggleVisibility, showModal }) => {
  return (
    <Container className="general-info-container">
      <h2>Education</h2>
      {/* <IoIosAddCircle onClick={toggleVisibility} className="add-button" /> */}
      <EducationInfoForm
        update={update}
        showModal={showModal}
        toggleVisibility={toggleVisibility}
      />
      <EducationInfoDisplay
        masterInfo={masterInfo.education}
        toggleVisibility={toggleVisibility}
      />
    </Container>
  );
};

export default EducationInfo;
