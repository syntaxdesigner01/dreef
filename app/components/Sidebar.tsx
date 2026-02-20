import { LuFileText, LuDownload, LuUser } from "react-icons/lu";
import clsx from "clsx";
import Image from "next/image";

const Sidebar = () => {
  const documents = [
    { name: "Letter Of Intent", active: true },
    { name: "Joint Development Agreement", active: true },
    { name: "Guarantee Request Letter", active: true },
    { name: "Credit Approval Notice", active: false },
    { name: "NDA", active: false },
  ];

  return (
    <aside className="w-full lg:w-80  border-l border-gray-100   flex flex-col gap-8 h-[calc(100vh-4rem)]">
      {/* Deal Documents */}
      <div className="bg-white p-4 rounded-md">
        <h3 className="font-bold text-gray-900 mb-4 text-base">
          Deal documents
        </h3>
        <div className="flex flex-col gap-3">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className={clsx(
                "group flex items-center justify-between px-3 py-2 w-full h-12 rounded-lg border-b-[0.8px] transition-all cursor-pointer",
                doc.active
                  ? "bg-[#6ADFF126] hover:bg-cyan-100/80 border-cyan-100 text-[#282E34] text-[16px]"
                  : "bg-cyan-100/20 hover:bg-gray-100/50 border-gray-100",
              )}
            >
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={doc.active ? "/document.svg" : "/document1.svg"}
                    alt="document"
                    width={32}
                    height={32}
                    className="object-contain"
                    quality={100}
                    priority={true}
                  />
                </div>
                <span
                  className={clsx(
                    "text-sm font-medium",
                    doc.active ? "text-gray-700" : "text-gray-400",
                  )}
                >
                  {doc.name}
                </span>
              </div>
              <Image
                src={doc.active ? "/download1.svg" : "/download2.svg"}
                alt="download"
                width={20}
                height={20}
                quality={100}
                priority={true}
                className={clsx(
                  "mr-1 transition-all hover:scale-110 object-contain",
                )}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className=" flex flex-col gap-2">
        <div className="bg-white p-[12px] rounded-[6px] border-[0.5px] border-gray-100 shadow-sm flex items-center gap-[10px] h-[100px]">
          <div className="w-12 h-12 p-2 rounded-full bg-[#E9FAFD] flex items-center justify-center text-teal-800">
            <Image
              src={"/userIcon.svg"}
              alt="userIcon"
              width={40}
              height={40}
              className="object-contain"
              quality={100}
              priority={true}
            />
          </div>
          <div>
            <p className="text-xs  text-gray-500 font-normal mb-0.5">
              Project Manager
            </p>
            <p className="font-semibold text-gray-800 text-base">
              Monsurat Adeniyi
            </p>
          </div>
        </div>

        <div className="bg-white p-[12px] rounded-[6px] border-[0.5px] border-gray-100 shadow-sm flex items-center gap-[10px] h-[100px]">
          <div className="w-12 h-12 p-2 rounded-full bg-[#E9FAFD] flex items-center justify-center text-teal-800">
            <Image
              src={"/userIcon.svg"}
              alt="userIcon"
              width={40}
              height={40}
              className="object-contain"
              quality={100}
              priority={true}
            />
          </div>
          <div>
            <p className="text-xs  text-gray-500 font-normal mb-0.5">
              Project Analyst
            </p>
            <p className="font-semibold text-gray-800 text-base">
              Precious Akinrin
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
