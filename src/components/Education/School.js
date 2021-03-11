import Card from "react-bootstrap/Card";

const School = ({ schoolInfo }) => {
  return (
    <div>
      <Card bg={"primary"} className="mb-2">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>School: {schoolInfo.schoolName}</Card.Title>
          <Card.Text>
            Years Attended: {schoolInfo.years} <br />
            Degree Earned: {schoolInfo.degree}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default School;
