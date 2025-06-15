
import SearchInput from "@/components/ui/search-input";
import UserButton from "@/components/ui/user-button";
import Notifications from "../ui/notifications";

const ProfileHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-10 w-full">
        <div className="max-lg:hidden">
            <Notifications />
        </div>
        <div className="w-full">
          <SearchInput wrapperClasses="md:w-[450px]" />
        </div>
      </div>
      <div className="max-lg:hidden">
        <UserButton />
      </div>
    </div>
  );
};

export default ProfileHeader;
