import "./App.css";
import GeneralInfo from "./components/General/GeneralInfo";
import { useState } from "react";
import EducationInfo from "./components/Education/EducationInfo";

function App() {
  const [masterInfo, updateInfo] = useState({
    general: {},
    education: [],
    work: {},
  });

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
    console.log(masterInfo);
  };

  return (
    <div className="App">
      <div>
        <GeneralInfo update={handleUpdateGeneralInfo} masterInfo={masterInfo} />
        <EducationInfo update={handleUpdateEducation} masterInfo={masterInfo} />
      </div>

      <button onClick={checkInfo}>Check Info</button>
    </div>
  );
}

export default App;
