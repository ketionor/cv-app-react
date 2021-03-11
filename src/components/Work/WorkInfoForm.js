import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const WorkInfoForm = ({ props }) => {
  const defaultState = {
    company: "IBM",
    position: "Janitor",
    years: "1993-1997",
    id: Date.now() % 52, //modulus here ensures work and education IDs will never be duplicates, 52 is arbitrary. Hacky but effective.
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
              <Form.Label>Company</Form.Label>
              <Form.Control
                placeholder="IBM"
                onChange={(e) => handleChange(e, "company")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                placeholder="Janitor"
                onChange={(e) => handleChange(e, "position")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Years</Form.Label>
              <Form.Control
                placeholder="1993-1997"
                onChange={(e) => handleChange(e, "years")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggleWorkModal}>
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

export default WorkInfoForm;
