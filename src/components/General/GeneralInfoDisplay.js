const GeneralInfoDisplay = ({ masterInfo }) => {
  return (
    <div>
      <p>Name: {masterInfo.name}</p>
      <p>Email: {masterInfo.email}</p>
      <p>Phone: {masterInfo.phone}</p>
    </div>
  );
};

export default GeneralInfoDisplay;
