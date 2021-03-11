import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";

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

  //delete item (education and work sections)
  const deleteItem = (id) => {
    updateInfo({
      ...masterInfo,
      education: masterInfo.education.filter((item) => item.id !== id),
      work: masterInfo.work.filter((item) => item.id !== id),
    });
  };

  //toggle modal visibility
  const toggleVisibility = (key) => {
    toggleModal({ ...showModal, [key]: !showModal[key] });
  };

  const toggleEducationModal = () => {
    toggleVisibility("education");
  };

  const toggleGenModal = () => {
    toggleVisibility("general");
  };

  //update master state
  const handleUpdateGeneralInfo = (newInfo, key) => {
    updateInfo({ ...masterInfo, [key]: newInfo });
  };

  const handleUpdateEducation = (newSchool) => {
    updateInfo({
      ...masterInfo,
      education: masterInfo.education.concat(newSchool),
    });
  };

  //test button
  const checkInfo = () => {
    console.log(masterInfo, showModal);
  };

  const infoProps = {
    masterInfo: masterInfo,
    showModal: showModal,
    toggleVisibility: toggleVisibility,
    handleUpdateGeneralInfo: handleUpdateGeneralInfo,
    handleUpdateEducation: handleUpdateEducation,
    toggleGenModal: toggleGenModal,
    toggleEducationModal: toggleEducationModal,
    deleteItem: deleteItem,
  };

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="" render={() => <Home props={infoProps} />} />
      </Switch>

      <button onClick={checkInfo}>Check Info</button>
    </div>
  );
}

export default App;
