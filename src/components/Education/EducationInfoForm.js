import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GoDiffAdded } from "react-icons/go";
import { useState } from "react";

const EducationInfoForm = ({ update }) => {
  const [info, updateInfo] = useState({
    schoolName: "Hogwarts",
    years: "1997-2001",
    degree: "Potions",
  });
  const [show, toggle] = useState(false);

  const toggleVisibility = () => {
    toggle(!show);
  };

  const handleChange = (e, key) => {
    updateInfo({ ...info, [key]: e.target.value });
    console.log(info);
  };

  const handleSubmit = () => {
    update(info, "education");
    updateInfo({});
  };

  return (
    <>
      <GoDiffAdded
        onClick={toggleVisibility}
        style={{ width: 50, height: 50, color: "blue" }}
      />
      <Modal show={show} onHide={toggleVisibility}>
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
          <Button variant="secondary" onClick={toggleVisibility}>
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
