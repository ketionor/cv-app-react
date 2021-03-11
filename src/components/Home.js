import GeneralInfo from "./General/GeneralInfo";
import EducationInfo from "./Education/EducationInfo";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import WorkInfo from "./Work/WorkInfo";
import { GoDiffAdded } from "react-icons/go";

const Home = ({ props }) => {
  return (
    <div className="home-container">
      <h2>General Information</h2>
      <GeneralInfo props={props} />
      <h2>Education</h2>
      <EducationInfo props={props} />
      <h2>Work</h2>
      <WorkInfo props={props} />
      <DropdownButton
        drop="up"
        variant="highlight"
        title={<GoDiffAdded style={{ width: 30, height: 30 }} />}
        className="add-button"
      >
        <Dropdown.Item onClick={props.toggleGenModal}>General</Dropdown.Item>
        <Dropdown.Item onClick={props.toggleWorkModal}>Work</Dropdown.Item>
        <Dropdown.Item onClick={props.toggleEducationModal}>
          Education
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Home;
