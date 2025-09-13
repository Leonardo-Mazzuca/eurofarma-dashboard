import { useOrders } from "@/hooks/use-orders";
import CardItemContainer from "../ui/card-item-container";
import { Button } from "../ui/button";
import { useColaborators } from "@/hooks/use-colaborators";
import Loading from "../ui/loading";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import OrderStatusTag from "./order-status-tag";

const PrizesOrdersTable = () => {
  const { orders, isLoading } = useOrders();
  const { colaborators } = useColaborators();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CardItemContainer
      className={"w-full flex flex-col"}
      title={
        <div>
          <h2 className="text-zinc-700 dark:text-gray-200 text-sm font-semibold">
            Pedidos
          </h2>
        </div>
      }
      contentClasses="w-full flex flex-col w-full"
    >
      {colaborators &&
        orders.map((o, index) => {
          const user = colaborators.find(
            (c) => String(c.id) === String(o.user_id)
          );

          return (
            <div key={index} className="w-full flex items-center gap-2 py-2">
              <div className="flex w-1/3 items-center gap-2">
                <Avatar className="w-12 h-12">
                  <AvatarFallback>
                    LM
                  </AvatarFallback>
                  <AvatarImage src={user?.image}/> 
                </Avatar>
                <div>
                  <p className="font-semibold text-zinc-700">{user?.fullName}</p>
                  <p className="font-normal text-zinc-500">{user?.points} Pontos</p>
                </div>
              </div>
              <div className="mx-auto">
                <OrderStatusTag status={o.status} /> 
              </div>
              <Button size={"sm"} className="w-[100px] ms-auto">Detalhes</Button>
            </div>
          );
        })}
    </CardItemContainer>
  );
};

export default PrizesOrdersTable;
