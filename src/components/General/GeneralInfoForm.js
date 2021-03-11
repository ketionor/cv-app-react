import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const GeneralInfoForm = ({ update, showModal, toggleVisibility }) => {
  const [info, updateInfo] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "555-555-5555",
  });

  const toggleGenModal = () => {
    toggleVisibility("general");
  };

  const handleChange = (e, key) => {
    updateInfo({ ...info, [key]: e.target.value });
    console.log(info);
  };

  const handleSubmit = () => {
    update(info, "general");
    updateInfo({
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "555-555-5555",
    });
    toggleGenModal();
  };

  return (
    <>
      <Modal show={showModal} onHide={toggleGenModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="John Doe"
                onChange={(e) => handleChange(e, "name")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                placeholder="johndoe@gmail.com"
                onChange={(e) => handleChange(e, "email")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder="xxx-xxx-xxxx"
                onChange={(e) => handleChange(e, "phone")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleGenModal}>
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

export default GeneralInfoForm;
