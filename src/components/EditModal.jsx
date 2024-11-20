import { RxCross1 } from "react-icons/rx";

const EditModal = ({ onCloseEditModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl text-gray-700 font-semibold">Edit Color</h2>
                    <button
                        onClick={onCloseEditModal}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <RxCross1 className="w-6 h-6" />
                    </button>
                </div>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <div className="flex justify-between items-center border rounded px-3 py-2 mt-2">
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="flex-1 text-gray-700 outline-none"
                        />
                        <RxCross1 className="w-5 h-5 text-gray-400 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
                    </div>
                </div>

                {/* Value Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Value</label>
                    <div className="flex justify-between items-center border rounded px-3 py-2 mt-2">
                        <span className="text-gray-700">Color</span>
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded border bg-yellow-400"></span>
                            <span className="text-gray-700">#FAFAFA</span>
                        </div>
                    </div>
                </div>

                {/* Color Picker */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                        Pick a Color
                    </label>
                    <div className="h-40 bg-blue-400 rounded-lg border shadow-inner"></div>
                </div>

                {/* Modal Actions */}
                <div className="flex justify-end items-center gap-4 border-t pt-4">
                    <button
                        onClick={onCloseEditModal}
                        className="px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-all"
                    >
                        Cancel
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
