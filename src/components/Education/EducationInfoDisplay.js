import School from "./School";

const EducationInfoDisplay = ({ masterInfo }) => {
  return (
    <div className="school-display">
      {masterInfo.map((school, idx) => (
        <School key={idx} schoolInfo={school} />
      ))}
    </div>
  );
};

export default EducationInfoDisplay;
