import School from "./School";

const EducationInfoDisplay = ({ masterInfo }) => {
  return (
    <div className="flex card">
      {masterInfo.map((school, idx) => (
        <School key={idx} schoolInfo={school} />
      ))}
    </div>
  );
};

export default EducationInfoDisplay;
