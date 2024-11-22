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
    const [currentItem, setCurrentItem] = useState(null);

    // Handle duplicating a color item
    const handleDuplicate = (item) => {
        const newId = colorItems.length + 1;
        const duplicateItem = { ...item, id: newId };
        setColorItems([...colorItems, duplicateItem]);
        setOpenMenuId(null);  // Close the menu after duplication
    };

    // Handle deleting a color item
    const handleDelete = (id) => {
        const updatedItems = colorItems.filter(item => item.id !== id);
        setColorItems(updatedItems);
        setOpenMenuId(null);  // Close the menu after deletion
    };

    // Open and close menu
    const handleOpenMenu = (id) => setOpenMenuId(openMenuId === id ? null : id);
    const closeMenu = () => setOpenMenuId(null);

    // Handle saving changes from edit modal
    const handleSave = (title, color) => {
        const updatedItems = colorItems.map((item) =>
            item.id === currentItem.id ? { ...item, title, color } : item
        );
        setColorItems(updatedItems);
        setIsModalOpen(false); // Close modal
    };

    return (
        <section>
            <div className="grid grid-cols-[1fr_200px] items-center border-b-2 py-3">
                <span className="text-slate-600 font-semibold">Name</span>
                <span className="text-slate-600 font-semibold">Value</span>
            </div>

            <SortableList
                items={colorItems}
                onSortEnd={({ oldIndex, newIndex }) => setColorItems(arrayMove(colorItems, oldIndex, newIndex))}
                handleOpenMenu={handleOpenMenu}
                openMenuId={openMenuId}
                closeMenu={closeMenu}
                onEditClick={(item) => {
                    setCurrentItem(item);
                    setIsModalOpen(true);
                }}
                onDuplicate={handleDuplicate}  // Pass duplicate handler
                onDelete={handleDelete}        // Pass delete handler
            />

            <div className="mt-5">
                <button
                    onClick={() => setIsModalOpen(true)} // Open Add Color Modal (can be used for adding new colors)
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
                >
                    Add Color
                </button>
            </div>

            {/* Edit Color Modal */}
            {isModalOpen && currentItem && (
                <EditModal
                    onCloseEditModal={() => setIsModalOpen(false)}
                    currentTitle={currentItem.title}
                    currentColor={currentItem.color}
                    onHandleSave={handleSave}
                />
            )}
        </section>
    );
};

export default ColorsItems;
