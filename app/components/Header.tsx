import { LuLeaf } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    return (
        <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <LuLeaf className="text-primary text-2xl" />
                <span className="font-bold text-xl tracking-tight text-primary-dark uppercase">DREEF</span>
            </div>

            {/* Profile Dropdown */}
             <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-semibold text-xs">J</div>
                <span className="text-sm font-medium text-gray-700">Johnson O.</span>
                <IoIosArrowDown className="text-gray-400 text-sm" />
            </div>
        </header>
    );
};

export default Header;
