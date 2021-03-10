import School from "./School";
import { GoDiffAdded } from "react-icons/go";

const EducationInfoDisplay = ({ masterInfo, toggleModal }) => {
  return (
    <div>
      {masterInfo.map((school, idx) => (
        <School key={idx} schoolInfo={school} />
      ))}
    </div>
  );
};

export default EducationInfoDisplay;
