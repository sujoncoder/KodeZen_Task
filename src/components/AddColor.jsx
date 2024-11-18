import { AiOutlinePlus } from "react-icons/ai";


const AddColor = () => {
    return (
        <button className="flex items-center gap-1 border text-slate-700 font-medium px-4 py-2 rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-200 duration-200">
            <AiOutlinePlus />
            AddColor
        </button>
    )
}

export default AddColor