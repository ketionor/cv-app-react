import { RiDeleteBin5Line } from "react-icons/ri";

const School = ({ schoolInfo, deleteItem }) => {
  return (
    <div className="school">
      <span>
        <h3>{schoolInfo.schoolName}</h3>
        <p>
          {schoolInfo.degree}, {schoolInfo.years}
        </p>
      </span>
      <span>
        <RiDeleteBin5Line
          style={{ color: "#dc3545", cursor: "pointer" }}
          onClick={() => deleteItem(schoolInfo.id)}
        />
      </span>
    </div>
  );
};

export default School;
