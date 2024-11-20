import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import { GrEdit } from "react-icons/gr";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ThreeDotMenu = ({ onCloseMenuModal }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleOpenEdit = () => {
        setIsEditModalOpen(true);
        console.log("Clicked Edit button...");
    };

    const handleCloseEditModal = () => {
        console.log("Closing Edit Modal");
        setIsEditModalOpen(false);
    };

    useEffect(() => {
        console.log("Updated isEditModalOpen:", isEditModalOpen);
    }, [isEditModalOpen]);

    return (
        <section>
            <div className="w-[170px] bg-white rounded-md">
                {/* Edit Option */}
                <button
                    onClick={handleOpenEdit}
                    className="hover:bg-slate-100 w-full duration-300 py-2 rounded flex items-center gap-2 cursor-pointer px-2"
                >
                    <GrEdit className="size-5 text-slate-500" />
                    <span className="text-lg text-slate-500">Edit</span>
                </button>

                {/* Duplicate Option */}
                <button
                    onClick={onCloseMenuModal}
                    className="hover:bg-slate-100 w-full duration-300 py-2 rounded flex items-center gap-2 cursor-pointer px-2">
                    <HiOutlineDuplicate className="size-5 text-slate-500" />
                    <span className="text-lg text-slate-500">Duplicate</span>
                </button>

                {/* Delete Option */}
                <button
                    onClick={onCloseMenuModal}
                    className="hover:bg-slate-100 w-full duration-300 py-2 rounded flex items-center gap-2 cursor-pointer px-2">
                    <RiDeleteBin6Line className="size-5 text-red-400" />
                    <span className="text-red-400 text-lg">Delete</span>
                </button>
            </div>

            {/* Debug Modal Rendering */}
            {isEditModalOpen && <EditModal onCloseEditModal={handleCloseEditModal} />}
        </section>
    );
};

export default ThreeDotMenu;
