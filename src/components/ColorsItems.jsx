import { useState } from "react";
import { arrayMoveImmutable as arrayMove } from "array-move";
import SortableList from "./SortableList";
import EditModal from "./EditModal";

const initialColors = [
    { id: 1, title: "Primary", color: "#FF6347" },
    { id: 2, title: "Secondary", color: "#32CD32" },
    { id: 3, title: "Title Text", color: "#4682B4" },
    { id: 4, title: "Supporting Text", color: "#6A5ACD" },
];

const ColorsItems = () => {
    const [colorItems, setColorItems] = useState(initialColors);
    const [openMenuId, setOpenMenuId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);


    // HANDLE DUPLICATE COLOR ITEM
    const handleDuplicate = (item) => {
        const newId = colorItems.length + 1;
        const duplicateItem = { ...item, id: newId };
        setColorItems([...colorItems, duplicateItem]);
        setOpenMenuId(null);
    };

    // HANDLE DELETE COLOR ITEM
    const handleDelete = (id) => {
        const updatedItems = colorItems.filter(item => item.id !== id);
        setColorItems(updatedItems);
        setOpenMenuId(null);
    };

    // HANDLE OPEN MENU
    const handleOpenMenu = (id) => setOpenMenuId(openMenuId === id ? null : id);

    // HANDLE CLOSE MENU
    const closeMenu = () => setOpenMenuId(null);

    // HANDLE ADD COLOR ITEM AND EDIT COLOR ITEM
    const handleSave = (title, color) => {
        if (isAddMode) {
            const newId = colorItems.length + 1;
            setColorItems([...colorItems, { id: newId, title, color }]);
        } else {
            const updatedItems = colorItems.map((item) =>
                item.id === currentItem.id ? { ...item, title, color } : item
            );
            setColorItems(updatedItems);
        }

        setIsModalOpen(false);
        setIsAddMode(false);
    };

    return (
        <section>
            {/* STATIC NAME VALUE TITILE SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-4 items-center border-b-2 py-3">
                <span className="text-slate-600 font-semibold">Name</span>
                <span className="text-slate-600 font-semibold">Value</span>
            </div>


            {/* SORTABLE LIST FOR COLOR ITEM */}
            <SortableList
                items={colorItems}
                onSortEnd={({ oldIndex, newIndex }) => setColorItems(arrayMove(colorItems, oldIndex, newIndex))}
                onHandleOpenMenu={handleOpenMenu}
                openMenuId={openMenuId}
                onCloseMenu={closeMenu}
                onEditClick={(item) => {
                    setCurrentItem(item);
                    setIsAddMode(false);
                    setIsModalOpen(true);
                }}
                onDuplicate={handleDuplicate}
                onDelete={handleDelete}
            />


            {/* ADD COLOR BUTTON */}
            <div className="mt-5 text-center sm:text-left">
                <button
                    onClick={() => {
                        setIsAddMode(true);
                        setCurrentItem({ title: "", color: "#000000" });
                        setIsModalOpen(true);
                    }}
                    className="px-4 py-2 bg-slate-100 border font-semibold text-slate-700 rounded-md hover:bg-slate-200 transition-all"
                >
                    Add Color
                </button>
            </div>


            {/* EDIT COLOR MODAL */}
            {isModalOpen && currentItem && (
                <EditModal
                    onCloseEditModal={() => {
                        setIsModalOpen(false);
                        setIsAddMode(false);
                    }}
                    currentTitle={currentItem.title}
                    currentColor={currentItem.color}
                    onHandleSave={handleSave}
                />
            )}
        </section>
    );
};

export default ColorsItems;
