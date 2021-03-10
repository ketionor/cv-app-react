import EducationInfoForm from "./EducationInfoForm";
import Container from "react-bootstrap/Container";

const EducationInfo = ({ update, masterInfo }) => {
  return (
    <Container className="general-info-container">
      <h2>Education</h2>
      {Object.keys(masterInfo.education).length === 0 ? (
        <EducationInfoForm update={update} />
      ) : (
        "null"
      )}
    </Container>
  );
};

export default EducationInfo;
