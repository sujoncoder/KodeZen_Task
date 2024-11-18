import { GrEdit } from "react-icons/gr";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";



const ThreeDotMenu = ({ onCloseModal }) => {
    return (
        <section>
            <div className="w-[170px] bg-white rounded-md">

                <div onClick={() => onCloseModal()} className="hover:bg-slate-100 duration-300 py-2 rounded flex items-center gap-2 cursor-pointer px-2">
                    <GrEdit className="size-5 text-slate-500" />
                    <span className="text-lg text-slate-500">Edit</span>
                </div>

                <div onClick={() => onCloseModal()} className="hover:bg-slate-100 duration-300 py-2 rounded flex items-center gap-2 cursor-pointer px-2">
                    <HiOutlineDuplicate className="size-5 text-slate-500" />
                    <span className="text-lg text-slate-500">Duplicate</span>
                </div>

                <div onClick={() => onCloseModal()} className="hover:bg-slate-100 duration-300 py-2 rounded flex items-center gap-2 cursor-pointer px-2">
                    <RiDeleteBin6Line className="size-5 text-red-400" />
                    <span className="text-red-400 text-lg">Delete</span>
                </div>
            </div>
        </section>
    )
}

export default ThreeDotMenu