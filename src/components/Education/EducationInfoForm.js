import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const EducationInfoForm = ({ update, showModal, toggleVisibility }) => {
  const [info, updateInfo] = useState([
    {
      schoolName: "Hogwarts",
      years: "1997-2001",
      degree: "Potions",
    },
  ]);

  const toggleEducationModal = () => {
    toggleVisibility("education");
  };

  const handleChange = (e, key) => {
    updateInfo({ ...info, [key]: e.target.value });
  };

  const handleSubmit = () => {
    update(info);
    updateInfo([
      {
        schoolName: "Hogwarts",
        years: "1997-2001",
        degree: "Potions",
      },
    ]);
    toggleEducationModal();
  };

  return (
    <>
      <Modal show={showModal} onHide={toggleEducationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>School Name</Form.Label>
              <Form.Control
                placeholder="Hogwarts School of Magic"
                onChange={(e) => handleChange(e, "schoolName")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Years Attended</Form.Label>
              <Form.Control
                placeholder="1997 - 2001"
                onChange={(e) => handleChange(e, "years")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Degree Earned</Form.Label>
              <Form.Control
                placeholder="Bachelors of Potions"
                onChange={(e) => handleChange(e, "degree")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleEducationModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EducationInfoForm;
