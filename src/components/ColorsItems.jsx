import { useState } from "react";
import { arrayMoveImmutable as arrayMove } from "array-move";

import SortableList from "./SortableList";
import AddColor from "./AddColor";

const initialColors = [
    { id: 1, title: "Primary", color: "#FF6347" },
    { id: 2, title: "Secondary", color: "#32CD32" },
    { id: 3, title: "Title Text", color: "#4682B4" },
    { id: 4, title: "Supporting Text", color: "#6A5ACD" },
];

const ColorsItems = () => {
    const [colorItems, setColorItems] = useState(initialColors);
    const [hoveredId, setHoveredId] = useState(null);
    const [openMenuId, setOpenMenuId] = useState(null);

    const handleOpenMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const closeMenu = () => {
        setOpenMenuId(null);
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColorItems(arrayMove(colorItems, oldIndex, newIndex));
    };

    return (
        <section>
            <div className="grid grid-cols-[1fr_200px] items-center border-b-2 py-3">
                <span className="text-slate-600 font-semibold">Name</span>
                <span className="text-slate-600 font-semibold">Value</span>
            </div>

            <SortableList
                items={colorItems}
                onSortEnd={onSortEnd}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                handleOpenMenu={handleOpenMenu}
                openMenuId={openMenuId}
                closeMenu={closeMenu}
            />

            <div className="mt-5">
                <AddColor />
            </div>
        </section>
    );
};

export default ColorsItems;
