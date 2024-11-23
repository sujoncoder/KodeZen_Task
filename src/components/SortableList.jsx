import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";


const SortableList = SortableContainer(({ items, onHandleOpenMenu, openMenuId, onCloseMenu, onEditClick, onDuplicate, onDelete }) => {
    return (
        <div>
            {items.map((item, index) => (
                <SortableItem
                    key={item.id}
                    index={index}
                    item={item}
                    onHandleOpenMenu={onHandleOpenMenu}
                    openMenuId={openMenuId}
                    onCloseMenu={onCloseMenu}
                    onEditClick={onEditClick}
                    onDuplicate={onDuplicate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
});

export default SortableList;
