import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const WorkInfoForm = ({ props }) => {
  const defaultState = {
    company: "IBM",
    position: "Janitor",
    years: "1993-1997",
    id: Date.now(),
  };

  const [info, updateInfo] = useState([defaultState]);

  const handleChange = (e, key) => {
    updateInfo({ ...info, [key]: e.target.value });
  };

  const handleSubmit = () => {
    updateInfo({ ...info, id: Date.now() });
    props.handleUpdateWork(info);
    updateInfo([defaultState]);
    props.toggleWorkModal();
  };

  return (
    <>
      <Modal show={props.showModal.work} onHide={props.toggleWorkModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Work History</Modal.Title>
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
          <Button variant="secondary" onClick={props.toggleWorkModal}>
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

export default WorkInfoForm;
