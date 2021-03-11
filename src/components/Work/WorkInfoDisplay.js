import Job from "./Job";

const WorkInfoDisplay = ({ masterInfo, deleteItem }) => {
  return (
    <div className="school-display">
      {masterInfo.map((job) => (
        <Job key={job.id} jobInfo={job} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default WorkInfoDisplay;
