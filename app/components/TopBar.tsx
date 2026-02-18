import Image from "next/image";
import { LuChevronDown, LuMenu } from "react-icons/lu";

const TopBar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-4 md:px-20 flex items-center justify-between sticky top-0 z-50 ">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/logo1.svg"
          alt="DREEF Logo"
          width={120}
          height={40}
          className="h-8 w-auto object-contain"
          priority
        />
      </div>

      {/* User Profile Section */}
      <div className="flex items-center">
        <div className="hidden md:flex items-center gap-3 bg-[#6ADFF11F] hover:bg-cyan-50 transition-colors border border-cyan-100 rounded-full pl-1 pr-4 py-1 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-[#0B77D51F] text-blue-700 flex items-center justify-center text-sm font-bold">
            J
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            Johnson O.
          </span>
          <LuChevronDown
            className="text-gray-400 group-hover:text-gray-600"
            size={16}
          />
        </div>

        {/* mobile nav */}
        <div className="md:hidden flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#0B77D51F] text-blue-700 flex items-center justify-center text-sm font-bold">
            J
          </div>

          {/* <LuMenu className="text-black" size={24} /> */}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
