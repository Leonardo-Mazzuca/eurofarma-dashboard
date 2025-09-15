import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "../ui/card";
import utils from "@/utils/image";
import OrderStatusTag from "./order-status-tag";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  status: OrderStatus;
};

const DetailDialog = ({ status, open, setOpen }: Props) => {
  const products = [
    {
      id: 1,
      image: utils.gym,
      title: "1 mês grátis de academia",
      quantity: 1,
      points: 40,
    },
    {
      id: 2,
      image: utils.bottle,
      title: "Garrafa térmica",
      quantity: 1,
      points: 12,
    },
  ];

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="w-full max-w-[95vw] md:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Detalhes</DialogTitle>
          <div className="flex items-center w-full gap-3">
            <div className="flex-1 gap-3 flex flex-col">
              {products.map((product) => (
                <Card key={product.id} className="py-0 flex-1">
                  <div className="flex gap-3">
                    <img
                      src={product.image}
                      className="w-[100px] h-[100px] rounded-tl-xl rounded-bl-xl"
                    />
                    <div className="py-2 flex flex-col w-full">
                      <h2 className="font-semibold">{product.title}</h2>
                      <p className="font-normal text-sm my-2 text-zinc-600">
                        Quantidade:{" "}
                        <span className="text-black font-semibold">
                          {product.quantity}
                        </span>
                      </p>
                      <span className="ms-auto me-2 font-normal text-zinc-600">
                        {product.points} Pontos
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div
              className="mx-2 h-full w-[3px] bg-gray-200 rounded-2xl"
            />
            <div className="flex-1 flex-col flex h-full">
              <Card className="mb-auto py-3">
                <div className="px-3">
                  <h2 className="font-semibold">
                    <span className="text-gray-500 font-semibold">
                      Colaborador a receber:
                    </span>{" "}
                    Jesse thomas
                  </h2>
                  <p className="text-gray-500 font-medium text-md">área: TI</p>
                  <p className="text-gray-500 font-medium text-md">
                    Unidade: 1
                  </p>
                </div>
              </Card>
              <Card className="p-3">
                <div className="flex items-center mt-auto w-full justify-between gap-3">
                  <h2 className="text-gray-500 font-semibold">
                    Total do pedido:
                  </h2>
                  <p className="font-semibold">127 pontos</p>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <h2 className="text-gray-500 font-semibold">Status:</h2>
                  <OrderStatusTag status={status} />
                </div>
              </Card>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
