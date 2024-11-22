import { SortableElement } from "react-sortable-hoc";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import ThreeDotMenu from "./ThreeDotMenu";

const SortableItem = SortableElement(({ item, handleOpenMenu, openMenuId, closeMenu, onEditClick, onDuplicate, onDelete }) => (
    <div className="group grid grid-cols-[1fr_200px] items-center py-2 px-1 border-b hover:bg-blue-100 duration-300 cursor-pointer">
        {/* Left Section */}
        <div className="flex items-center gap-2">
            <RxDragHandleDots2 className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <MdOutlineColorLens style={{ color: item.color }} />
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
                    className={`absolute right-10 mt-2 bg-white shadow-lg rounded-md p-2 z-10 ${openMenuId === item.id ? "block" : "hidden"}`}
                >
                    <ThreeDotMenu
                        onEditClick={() => onEditClick(item)}  // Pass the item to parent
                        onCloseMenuModal={closeMenu}
                        onDuplicate={() => onDuplicate(item)}  // Handle duplication
                        onDelete={() => onDelete(item.id)}     // Handle deletion
                    />
                </div>
            </div>
        </div>
    </div>
));

export default SortableItem;
