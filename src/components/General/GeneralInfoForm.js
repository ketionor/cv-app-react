import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const GeneralInfoForm = ({ props }) => {
  const defaultState = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "555-555-5555",
  };

  const [info, updateInfo] = useState(defaultState);

  const handleChange = (e, key) => {
    updateInfo({ ...info, [key]: e.target.value });
  };

  const handleSubmit = () => {
    props.handleUpdateGeneralInfo(info, "general");
    updateInfo(defaultState);
    props.toggleGenModal();
  };

  return (
    <>
      <Modal show={props.showModal.general} onHide={props.toggleGenModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit General Information</Modal.Title>
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
          <Button variant="secondary" onClick={props.toggleGenModal}>
            Close
          </Button>
          <Button variant="highlight" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GeneralInfoForm;
