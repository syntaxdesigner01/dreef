import { LuFileText, LuDownload, LuUser, LuCircle } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-80 bg-white border-l border-gray-100 p-6 flex flex-col gap-8 h-full">
      {/* Deal Documents */}
      <div>
        <h3 className="font-bold text-gray-800 mb-4 text-sm">Deal documents</h3>
        <div className="flex flex-col gap-3">
          {[
            "Letter Of Intent",
            "Joint Development Agreement",
            "Guarantee Request Letter",
            "Credit Approval Notice",
            "NDA",
          ].map((doc, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-50 text-blue-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <LuFileText size={16} />
                </div>
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900">
                  {doc}
                </span>
              </div>
              <LuDownload className="text-gray-400 group-hover:text-primary" size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                  <LuUser size={20} />
              </div>
              <div>
                  <p className="text-xs text-gray-500">Project Manager</p>
                  <p className="font-bold text-gray-800 text-sm">Monsurat Adeniyi</p>
              </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                  <LuCircle size={20} />
              </div>
              <div>
                  <p className="text-xs text-gray-500">Project Analyst</p>
                  <p className="font-bold text-gray-800 text-sm">Precious Akinrin</p>
              </div>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;
