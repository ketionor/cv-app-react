import EducationInfoForm from "./EducationInfoForm";
import Container from "react-bootstrap/Container";
import EducationInfoDisplay from "./EducationInfoDisplay";

const EducationInfo = ({ update, masterInfo }) => {
  return (
    <Container className="general-info-container">
      <h2>Education</h2>
      {Object.keys(masterInfo.education).length === 0 ? (
        <EducationInfoForm update={update} />
      ) : (
        <EducationInfoDisplay masterInfo={masterInfo.education} />
      )}
    </Container>
  );
};

export default EducationInfo;
