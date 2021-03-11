import Container from "react-bootstrap/Container";

const GeneralInfoDisplay = ({ masterInfo }) => {
  return (
    <div>
      <h3>{masterInfo.name}</h3>
      <p>
        <strong>Email:</strong> {masterInfo.email}
      </p>
      <p>
        <strong>Phone:</strong> {masterInfo.phone}
      </p>
    </div>
  );
};

export default GeneralInfoDisplay;
