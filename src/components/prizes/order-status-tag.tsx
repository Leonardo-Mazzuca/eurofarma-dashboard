const OrderStatusTag = ({
  status,
}: {
  status: OrderStatus;
}) => {
  const renderText = () => {
    switch (status) {
      case "delivered":
        return "Entregue";
      case "ordered":
        return "Disp. Retirada";
      case "waiting":
        return "Aguardando";
      case "reversed":
        return "Estornado";
    }
  };

  const getColor = () => {
    switch (status) {
      case "delivered":
        return "green";
      case "ordered":
        return "#1B59F8";
      case "waiting":
        return "red";
      case "reversed":
        return "purple";
    }
  };

  const circleStyle = {
    display: "inline-block",
    width: 14,
    height: 14,
    borderRadius: "50%",
    marginRight: 8,
    border: "2px solid",
  };

  return (
    <div className="flex items-center gap-2">
      <p className="text-zinc-700 dark:text-gray-400 font-semibold">{renderText()}</p>
      <span
        style={{
          ...circleStyle,
          borderColor: getColor(),
          backgroundColor: getColor(),
        }}
      />
    </div>
  );
};

export default OrderStatusTag;
