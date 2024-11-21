import { SortableElement } from "react-sortable-hoc";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";

import ThreeDotMenu from "./ThreeDotMenu";

const SortableItem = SortableElement(({ item, hoveredId, setHoveredId, handleOpenMenu, openMenuId, closeMenu }) => (
    <div
        className="group grid grid-cols-[1fr_200px] items-center py-2 px-1 border-b hover:bg-blue-100 duration-300 cursor-pointer"
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
    >
        {/* Left Section */}
        <div className="flex items-center gap-2">
            <RxDragHandleDots2 className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {hoveredId === item.id ? (
                <input type="checkbox" className="w-4 h-4 rounded" />
            ) : (
                <MdOutlineColorLens style={{ color: item.color }} />
            )}
            <span className="text-slate-700 text-lg">{item.title}</span>
        </div>

        {/* Right Section */}
        <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded border" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-700 text-lg">{item.color}</span>
            </div>

            <button onClick={() => handleOpenMenu(item.id)} className="relative">
                <FiMoreHorizontal className="size-5 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-50 rounded p-1" />
            </button>

            {/* ThreeDotMenu */}
            <div className="relative flex justify-end">
                <div
                    className={`absolute right-10 mt-2 bg-white shadow-lg rounded-md p-2 z-10 ${openMenuId === item.id ? "block" : "hidden"
                        }`}
                >
                    <ThreeDotMenu onCloseMenuModal={closeMenu} />
                </div>
            </div>
        </div>
    </div>
));

export default SortableItem;
