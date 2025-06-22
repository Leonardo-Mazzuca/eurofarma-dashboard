import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewFeatureToggle = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 md:p-22">
      <div className="flex gap-4 max-lg:mt-10 items-center">
        <Button onClick={() => navigate(-1)} variant={"ghost"} size={"icon"}>
          <ArrowLeft className="text-blue-500" />
        </Button>
        <div>
          <span className="text-gray-500 font-normal text-sm">
            Voltar para permissões
          </span>
          <h2 className="font-semibold text-2xl">Adicionar um colaborador</h2>
        </div>
      </div>

      <form className="my-10">
        <div className="flex flex-wrap items-center gap-6">
          <div className="w-full">
            <Label className="mb-3 text-gray-400">Nome do colaborador</Label>
            <Input className="md:w-[350px] w-full border-gray-500" />
          </div>
          <div className="w-full">
            <Label className="mb-3 text-gray-400">ID do colaborador</Label>
            <Input type="number" className="md:w-[350px] w-full border-gray-500" />
          </div>
        </div>

        <div className="my-5 md:flex-row flex-col md:items-center flex gap-6 items-start">
          <div className="flex items-center gap-2">
            <Checkbox />
            <Label>Portal avisos</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <Label>Newsletter</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />

            <Label>Projetos</Label>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          <Button className="md:w-[200px] w-full bg-gray-200 text-zinc-700 hover:bg-gray-300 h-[45px]">
            Cancelar
          </Button>
          <Button className="bg-blue-500 w-full md:w-[200px] h-[45px] hover:bg-blue-600">
            Adicionar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewFeatureToggle;
