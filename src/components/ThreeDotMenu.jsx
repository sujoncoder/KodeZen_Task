import { GrEdit } from "react-icons/gr";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ThreeDotMenu = ({ onCloseMenuModal, onEditClick, onDuplicate, onDelete }) => {
    return (
        <section>
            <div className="w-44 bg-white rounded-md shadow">
                {/* Edit Option */}
                <button
                    onClick={onEditClick}
                    className="hover:bg-slate-100 w-full py-2 px-2 flex items-center gap-2 rounded duration-300"
                >
                    <GrEdit className="text-slate-500" />
                    <span className="text-slate-500 text-lg">Edit</span>
                </button>

                {/* Duplicate Option */}
                <button
                    onClick={() => { onDuplicate(); onCloseMenuModal(); }}
                    className="hover:bg-slate-100 w-full py-2 px-2 flex items-center gap-2 rounded duration-300"
                >
                    <HiOutlineDuplicate className="text-slate-500" />
                    <span className="text-slate-500 text-lg">Duplicate</span>
                </button>

                {/* Delete Option */}
                <button
                    onClick={() => { onDelete(); onCloseMenuModal(); }}
                    className="hover:bg-slate-100 w-full py-2 px-2 flex items-center gap-2 rounded duration-300"
                >
                    <RiDeleteBin6Line className="text-red-400" />
                    <span className="text-red-400 text-lg">Delete</span>
                </button>
            </div>
        </section>
    );
};

export default ThreeDotMenu;
