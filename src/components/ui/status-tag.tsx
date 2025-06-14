

const StatusTag = ({ status }: { status: "online" | "offline" }) => {
  const circleStyle = {
    display: "inline-block",
    width: 14,
    height: 14,
    borderRadius: "50%",
    marginRight: 8,
    border: "2px solid",
  };

  return (
    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span
        style={{
          ...circleStyle,
          borderColor: status === "online" ? "#4CAF50" : "#007BFF",
          backgroundColor: status === "online" ? "#4CAF50" : "#007BFF",
        }}
      />
      {status === "online" ? "Online" : "Offline"}
    </span>
  );
};

export default StatusTag;
