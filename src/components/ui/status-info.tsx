

const StatusInfo = ({ status }: { status: boolean }) => {
  const circleStyle = {
    display: "inline-block",
    width: 14,
    height: 14,
    borderRadius: "50%",
    marginRight: 8,
    border: "2px solid",
  };

  const red = "#A30D11";
  const green = "#4CAF50";
  return (
    <span
      style={{
        ...circleStyle,
        borderColor: status ? green : red,
        backgroundColor: status ? green : red,
      }}
    />
  );
};

export default StatusInfo;
