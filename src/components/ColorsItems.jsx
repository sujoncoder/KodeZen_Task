import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import AddColor from "./AddColor";
import ThreeDotMenu from "./ThreeDotMenu";

const initialColors = [
    { id: 1, title: "Primary", color: "#FF6347" },
    { id: 2, title: "Secondary", color: "#32CD32" },
    { id: 3, title: "Title Text", color: "#4682B4" },
    { id: 4, title: "Supporting Text", color: "#6A5ACD" },
];

const ColorsItems = () => {
    const [colorItems, setColorItems] = useState(initialColors);
    const [hoveredId, setHoveredId] = useState(null);
    const [openMenuId, setOpenMenuId] = useState(null); // Track the item whose menu is open
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 }); // Track modal position

    const handleOpenMenu = (id, event) => {
        const rect = event.target.getBoundingClientRect(); // Get the button's position
        setMenuPosition({
            top: rect.bottom + window.scrollY, // Adjust for scroll
            left: rect.left + window.scrollX,
        });
        setOpenMenuId(id);
    };

    const closeMenu = () => {
        setOpenMenuId(null);
    };

    return (
        <section>
            {/* Header */}
            <div className="grid grid-cols-[1fr_200px] items-center border-b-2 py-3">
                <span className="text-slate-600 font-semibold">Name</span>
                <span className="text-slate-600 font-semibold">Value</span>
            </div>

            {/* Color Items */}
            <div>
                {colorItems.map((item) => (
                    <div
                        key={item.id}
                        className="group grid grid-cols-[1fr_200px] items-center py-2 px-1 border-b hover:bg-blue-100 duration-300 cursor-pointer"
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        {/* Left Section: Drag Handle, Color Icon, and Title */}
                        <div className="flex items-center gap-2">
                            <RxDragHandleDots2
                                className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            {hoveredId === item.id ? (
                                <input type="checkbox" className="w-4 h-4 rounded" />
                            ) : (
                                <MdOutlineColorLens style={{ color: item.color }} />
                            )}
                            <span className="text-slate-700 text-lg">{item.title}</span>
                        </div>

                        {/* Right Section: Color Block and Value */}
                        <div className="flex justify-between items-center gap-2">
                            <div className="flex items-center gap-2">
                                <span
                                    className="w-6 h-6 rounded border"
                                    style={{ backgroundColor: item.color }}
                                ></span>
                                <span className="text-slate-700 text-lg">{item.color}</span>
                            </div>

                            <button
                                onClick={(e) => handleOpenMenu(item.id, e)}
                                className="relative"
                            >
                                <FiMoreHorizontal
                                    className="size-5 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-50 rounded p-1"
                                />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add Color Section */}
                <div className="mt-5">
                    <AddColor />
                </div>
            </div>

            {/* Modal for ThreeDotMenu */}
            {openMenuId !== null && (
                <div
                    className="absolute bg-white shadow-lg rounded-md p-2 z-10"
                    style={{
                        top: `${menuPosition.top}px`,
                        left: `${menuPosition.left}px`,
                    }}
                >
                    <ThreeDotMenu onCloseModal={closeMenu} />
                </div>
            )}
        </section>
    );
};

export default ColorsItems;
