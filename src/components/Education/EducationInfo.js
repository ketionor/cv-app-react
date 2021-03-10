import EducationInfoForm from "./EducationInfoForm";
import Container from "react-bootstrap/Container";
import EducationInfoDisplay from "./EducationInfoDisplay";
import { useState } from "react";
import { GoDiffAdded } from "react-icons/go";

const EducationInfo = ({ update, masterInfo }) => {
  const [showModal, toggleModal] = useState(false);

  const toggleVisibility = () => {
    console.log("modal toggled");
    toggleModal(!showModal);
    console.log(showModal);
  };
  return (
    <Container className="general-info-container">
      console.log(masterInfo.education)
      <h2>Education</h2>
      <GoDiffAdded
        onClick={toggleVisibility}
        style={{ width: 50, height: 50, color: "blue" }}
      />
      <EducationInfoForm
        update={update}
        masterInfo={masterInfo}
        showModal={showModal}
        toggleModal={toggleVisibility}
      />
      <EducationInfoDisplay
        masterInfo={masterInfo.education}
        toggleModal={toggleVisibility}
      />
    </Container>
  );
};

export default EducationInfo;
