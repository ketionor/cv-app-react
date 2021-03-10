import "./App.css";
import GeneralInfo from "./components/General/GeneralInfo";
import { useState } from "react";
import EducationInfo from "./components/Education/EducationInfo";

function App() {
  const [masterInfo, updateInfo] = useState({
    general: {},
    education: {},
  });

  const handleUpdate = (newInfo, key) => {
    updateInfo({ ...masterInfo, [key]: newInfo });
  };

  const checkInfo = () => {
    console.log(masterInfo);
  };

  return (
    <div className="App">
      <div>
        <GeneralInfo update={handleUpdate} masterInfo={masterInfo} />
        <EducationInfo update={handleUpdate} masterInfo={masterInfo} />
      </div>

      <button onClick={checkInfo}>Check Info</button>
    </div>
  );
}

export default App;
