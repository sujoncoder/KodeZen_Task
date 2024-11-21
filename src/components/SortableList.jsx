import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";

const SortableList = SortableContainer(({ items, hoveredId, setHoveredId, handleOpenMenu, openMenuId, closeMenu }) => {
    return (
        <div>
            {items.map((item, index) => (
                <SortableItem
                    key={`item-${item.id}`}
                    index={index}
                    item={item}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                    handleOpenMenu={handleOpenMenu}
                    openMenuId={openMenuId}
                    closeMenu={closeMenu}
                />
            ))}
        </div>
    );
});

export default SortableList;
