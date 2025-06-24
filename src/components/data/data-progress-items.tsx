import DataProgressItem from "@/components/data/data-progress-item";

const DataProgressItems = () => {
  const firstRowItems = [
    {
      title: "Intra Empreendedorismo",
      progress: 74,
      image: "https://picsum.photos/id/238/100/100",
      firstColor: "#FFA500",
      secondColor: "#FF92A5",
    },
    {
      title: "Hackaton",
      progress: 52,
      image: "https://picsum.photos/id/237/100/100",
      firstColor: "#FF4D4D",
      secondColor: "#FF92A5",
    },
    {
      title: "Oficina Digital",
      progress: 36,
      image: "https://picsum.photos/id/236/100/100",
      firstColor: "#FF4D4D",
      secondColor: "#FF92A5",
    },
  ];

  const secondRowItems = [
    {
      title: "CLIC",
      progress: 95,
      image: "https://picsum.photos/id/1011/100/100",
      firstColor: "#22C55E",
      secondColor: "#BBF7D0",
    },
    {
      title: "CLIC Desafios",
      progress: 92,
      image: "https://picsum.photos/id/1012/100/100",
      firstColor: "#4ADE80",
      secondColor: "#BBF7D0",
    },
    {
      title: "Kaizen",
      progress: 89,
      image: "https://picsum.photos/id/1013/100/100",
      firstColor: "#86EFAC",
      secondColor: "#D1FAE5",
    },
  ];

  return (
    <div className="flex gap-6 items-stretch min-w-full">
      <div className="flex-1">
        <DataProgressItem
          items={firstRowItems}
          title={"Quizzes com menor índice de acerto"}
        />
      </div>
      <div className="flex-1">
        <DataProgressItem
          title="Quizzes com maior taxa de acertos ou conclusão"
          items={secondRowItems}
        />
      </div>
    </div>
  );
};

export default DataProgressItems;
