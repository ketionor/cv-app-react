import "./App.css";
import GeneralInfo from "./components/General/GeneralInfo";
import { useState } from "react";
import EducationInfo from "./components/Education/EducationInfo";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [masterInfo, updateInfo] = useState({
    general: {},
    education: [],
    work: [],
  });
  const [showModal, toggleModal] = useState({
    general: false,
    education: false,
    work: false,
  });

  const toggleVisibility = (key) => {
    console.log("toggling a modal");
    toggleModal({ ...showModal, [key]: !showModal[key] });
  };

  const toggleEducationModal = () => {
    toggleVisibility("education");
  };

  const toggleGenModal = () => {
    toggleVisibility("general");
  };

  const handleUpdateGeneralInfo = (newInfo, key) => {
    updateInfo({ ...masterInfo, [key]: newInfo });
  };

  const handleUpdateEducation = (newSchool) => {
    updateInfo({
      ...masterInfo,
      education: masterInfo.education.concat(newSchool),
    });
  };

  const checkInfo = () => {
    console.log(masterInfo, showModal);
  };

  return (
    <div className="App">
      <div>
        <GeneralInfo
          update={handleUpdateGeneralInfo}
          masterInfo={masterInfo}
          toggleVisibility={toggleVisibility}
          showModal={showModal.general}
        />
        <EducationInfo
          update={handleUpdateEducation}
          masterInfo={masterInfo}
          toggleVisibility={toggleVisibility}
          showModal={showModal.education}
        />
        <DropdownButton
          drop="up"
          variant="primary"
          title="Add"
          className="add-button"
        >
          <Dropdown.Item onClick={toggleGenModal}>General</Dropdown.Item>
          <Dropdown.Item onClick={toggleEducationModal}>
            Education
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <button onClick={checkInfo}>Check Info</button>
    </div>
  );
}

export default App;
