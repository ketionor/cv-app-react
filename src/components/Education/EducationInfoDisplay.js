const EducationInfoDisplay = ({ masterInfo }) => {
  return (
    <div>
      <p>School: {masterInfo.schoolName}</p>
      <p>Years Attended: {masterInfo.years}</p>
      <p>Degree Earned: {masterInfo.degree}</p>
    </div>
  );
};

export default EducationInfoDisplay;
