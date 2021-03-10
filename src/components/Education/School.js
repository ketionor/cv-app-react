const School = ({ schoolInfo }) => {
  return (
    <div>
      <p>School: {schoolInfo.schoolName}</p>
      <p>Years Attended: {schoolInfo.years}</p>
      <p>Degree Earned: {schoolInfo.degree}</p>
    </div>
  );
};

export default School;
