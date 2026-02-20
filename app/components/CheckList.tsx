import Image from "next/image";
import { LuFileText } from "react-icons/lu";

interface CheckListProps {
  title: string;
  detail: string;
}

const CheckList = ({ title, detail }: CheckListProps) => {
  return (
    <div className="bg-white p-2 md:p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex flex-col md:flex-row items-center md:gap-4 md:justify-between w-full">
        {/* status mobile view */}
        <div className="flex flex-row items-center gap-2  justify-between w-full  md:hidden py-2">
          <span className="bg-[#EDEAEC] text-[#282E34CC] font-normal text-xs px-2 py-0.5 rounded">
            10 DAYS
          </span>
          <div className="flex items-center text-center gap-1">
            <p className="text-[10px] font-bold text-[#282E34CC] tracking-wider">
              PENDING
            </p>
            <div className="w-4 h-4 border border-[#2B2E314D] rounded"></div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-5 h-5 rounded-full border border-gray-300"></div>
          <div className="flex-1 ">
            <p className="font-normal text-sm text-[#282E34]">{title}</p>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-400 py-1">
              <Image
                src={"/out2.svg"}
                alt="out"
                height={12}
                width={12}
                priority
              />{" "}
              Output: Commercial & Feasibility Report
            </div>

            <div className="flex gap-2 items-center">
              <LuFileText className="h-3 w-3 text-[#282E3480]" />{" "}
              <div className="mt-2 inline-flex items-center gap-2 bg-[#EDEAEC] text-subPrimaryText px-3 py-1 rounded text-[10px] md:text-xs">
                {detail}
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex flex-row items-center gap-1 hidden">
          <div className="flex-1 items-center text-center">
            <p className="bg-[#EDEAEC] text-[#282E34CC] font-normal text-xs px-2 py-0.5 rounded">
              10 DAYS
            </p>
            <p className="text-[10px] font-bold text-[#282E34] tracking-wider">
              PENDING
            </p>
          </div>
          <div className="w-4 h-4 border-[#2B2E314D] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckList;
