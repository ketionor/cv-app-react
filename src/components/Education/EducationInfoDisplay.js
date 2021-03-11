import School from "./School";

const EducationInfoDisplay = ({ masterInfo, deleteItem }) => {
  return (
    <div className="school-display">
      {masterInfo.map((school) => (
        <School key={school.id} schoolInfo={school} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default EducationInfoDisplay;
