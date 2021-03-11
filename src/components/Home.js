import GeneralInfo from "./General/GeneralInfo";
import EducationInfo from "./Education/EducationInfo";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Home = ({ props }) => {
  return (
    <div className="home-container">
      <GeneralInfo props={props} />
      <EducationInfo props={props} />
      <DropdownButton
        drop="up"
        variant="primary"
        title="Add"
        className="add-button"
      >
        <Dropdown.Item onClick={props.toggleGenModal}>General</Dropdown.Item>
        <Dropdown.Item onClick={props.toggleEducationModal}>
          Education
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Home;
