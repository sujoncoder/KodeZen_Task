import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";

const SortableList = SortableContainer(({ items, handleOpenMenu, openMenuId, closeMenu, onEditClick, onDuplicate, onDelete }) => {
    return (
        <div>
            {items.map((item, index) => (
                <SortableItem
                    key={item.id}
                    index={index}
                    item={item}
                    handleOpenMenu={handleOpenMenu}
                    openMenuId={openMenuId}
                    closeMenu={closeMenu}
                    onEditClick={onEditClick}
                    onDuplicate={onDuplicate}  // Pass duplicate handler
                    onDelete={onDelete}        // Pass delete handler
                />
            ))}
        </div>
    );
});

export default SortableList;
