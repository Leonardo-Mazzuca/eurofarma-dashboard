import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "../ui/card";
import utils from "@/utils/image";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DetailDialog = ({ open, setOpen }: Props) => {
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="w-full max-w-[95vw] md:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Detalhes</DialogTitle>
          <div className="flex items-center gap-3">
            <div className="flex-1 flex flex-col h-full">
              <Card className="mb-auto py-3">
                <div className="px-3">
                  <h2>Colaborador a receber: Jesse thomas</h2>
                  <p className="text-gray-500 font-medium text-md">área: TI</p>
                  <p className="text-gray-500 font-medium text-md">
                    Unidade: 1
                  </p>
                </div>
              </Card>
            </div>
            <div className="flex-1 gap-3 flex flex-col">
              <Card className="py-0">
                <div className="flex gap-3">
                  <img
                    src={utils.gym}
                    className="w-[100px] h-[100px] rounded-tl-xl rounded-bl-xl"
                  />
                  <div className="py-2 flex flex-col w-full">
                    <h2 className="font-semibold">1 mês grátis de academia</h2>
                    <p className="font-normal text-sm my-2 text-zinc-600">Quantidade: <span className="text-black font-semibold">01</span></p>
                    <span className="ms-auto me-2 font-normal text-zinc-600">40 Pontos</span>
                  </div>
                </div>
              </Card>
              <Card className="py-0">
                <div className="flex gap-3">
                  <img
                    src={utils.bottle}
                    className="w-[100px] h-[100px] rounded-tl-xl rounded-bl-xl"
                  />
                  <div className="py-2 flex flex-col w-full">
                    <h2 className="font-semibold">Garrafa térmica</h2>
                    <p className="font-normal text-sm my-2 text-zinc-600">Quantidade: <span className="text-black font-semibold">01</span></p>
                    <span className="ms-auto me-2 font-normal text-zinc-600">12 Pontos</span>
                  </div>
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
