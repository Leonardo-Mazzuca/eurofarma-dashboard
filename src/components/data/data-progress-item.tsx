import CardItemContainer from "@/components/ui/card-item-container";

type Props = {
  title: string;
  items: {
    image: string;
    progress: number;
    title: string;
    firstColor: string;
    secondColor: string;
  }[];
};

const DataProgressItem = ({ items, title }: Props) => {
  return (
    <CardItemContainer
      className="w-full"
      title={<h2 className="text-gray-500 text-sm font-medium">{title}</h2>}
      contentClasses="w-full block"
    >
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <img
              className="w-[50px] h-[50px] object-cover rounded-lg"
              alt={`Image ${index}`}
              src={item.image}
            />

            <div className="flex-1 flex flex-col ">
              <h2 className="text-zinc-800 text-sm font-bold truncate">
                {item.title}
              </h2>

              <div className="mt-1 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${item.progress}%`,
                    background: `linear-gradient(to right, ${item.firstColor}, ${item.secondColor})`,
                  }}
                />
              </div>
            </div>

            <h3 className="text-zinc-500 font-semibold whitespace-nowrap">
              {item.progress}%
            </h3>
          </div>
        ))}
      </div>
    </CardItemContainer>
  );
};

export default DataProgressItem;
