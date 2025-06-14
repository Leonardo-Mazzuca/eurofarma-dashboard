import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import localizedFormat from "dayjs/plugin/localizedFormat";

import Cards from "@/components/home/cards";
import DonutChart from "@/components/home/donut-chart";
import ProfileHeader from "@/components/home/profile-header";
import UserButton from "@/components/ui/user-button";
import Notifications from "@/components/ui/notifications";

dayjs.extend(localizedFormat);
dayjs.locale("pt-br");

const HomeHeader = () => {
  const today = dayjs();
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-2xl text-zinc-600 font-semibold">Hoje</h2>
        <p className="text-muted-foreground">
          {today.format("ddd, DD MMM, YYYY, hh.mm A")}
        </p>
      </div>
      <div className="md:hidden">
        <div className="flex items-center gap-2">
          <Notifications />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

const HomeLeft = () => {
  return (
    <div className="bg-neutral-100 max-lg:flex max-lg:flex-col py-8 px-6 md:w-[500px]">
      <HomeHeader />
      <div className="md:hidden">
        <ProfileHeader />
      </div>
      <Cards />
      <DonutChart />
    </div>
  );
};

export default HomeLeft;
