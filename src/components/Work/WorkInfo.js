import Container from "react-bootstrap/Container";
import WorkInfoForm from "./WorkInfoForm";
import WorkInfoDisplay from "./WorkInfoDisplay";

const WorkInfo = ({ props }) => {
  const checkInfo = () => {
    return Object.keys(props.masterInfo.work).length === 0;
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
        <WorkInfoDisplay
          masterInfo={props.masterInfo.work}
          deleteItem={props.deleteItem}
        />
      )}
      <WorkInfoForm props={props} />
    </Container>
  );
};

export default WorkInfo;
