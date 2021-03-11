import { RiDeleteBin5Line } from "react-icons/ri";

const Job = ({ jobInfo, deleteItem }) => {
  return (
    <div className="job">
      <span>
        <h3>{jobInfo.company}</h3>
        <p>
          {jobInfo.position}, {jobInfo.years}
        </p>
      </span>
      <span>
        <RiDeleteBin5Line
          style={{ color: "#dc3545", cursor: "pointer" }}
          onClick={() => deleteItem(jobInfo.id)}
        />
      </span>
    </div>
  );
};

export default Job;
