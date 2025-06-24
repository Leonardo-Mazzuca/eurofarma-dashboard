import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Notifications = () => {
  return (
    <Button variant={"ghost"} className="w-[50px] h-[50px]">
      <Bell size={24} className="dark:text-white" />
    </Button>
  );
};

export default Notifications;
