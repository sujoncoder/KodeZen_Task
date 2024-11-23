import { useState } from "react";
import { ChromePicker } from "react-color";
import { RxCross1 } from "react-icons/rx";

const EditModal = ({ onCloseEditModal, currentTitle, currentColor, onHandleSave }) => {
    const [color, setColor] = useState(currentColor);
    const [title, setTitle] = useState(currentTitle);
    const [showPicker, setShowPicker] = useState(false);

    // HANDLE COLOR CHANGE
    const handleColorChange = (color) => {
        setColor(color.hex);
    };

    // HANDLE SAVE CLICK
    const handleSaveClick = () => {
        if (!title.trim()) {
            alert("Title cannot be empty.");
            return;
        }
        onHandleSave(title, color);
        onCloseEditModal();
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl mx-4 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl text-gray-700 font-semibold">Edit Color</h2>
                    <button
                        onClick={onCloseEditModal}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close Modal"
                    >
                        <RxCross1 className="w-6 h-6" />
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <div className="flex justify-between items-center border rounded px-3 py-2 mt-2">
                        <input
                            type="text"
                            value={title}
                            placeholder="Enter title"
                            onChange={(e) => setTitle(e.target.value)}
                            className="flex-1 text-gray-700 outline-none"
                        />
                        <RxCross1
                            onClick={() => setTitle("")}
                            className="w-5 h-5 text-gray-400 cursor-pointer hover:bg-gray-200 rounded-full p-1"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Value</label>
                    <div className="flex justify-between items-center border rounded px-3 py-2 mt-2">
                        <span className="text-gray-700">Color</span>
                        <div className="flex items-center gap-2">
                            <span
                                className="w-6 h-6 rounded border cursor-pointer"
                                style={{ backgroundColor: color }}
                                onClick={() => setShowPicker(!showPicker)} // Toggle the color picker
                            ></span>
                            <span className="text-gray-700">{color}</span>
                        </div>
                    </div>
                </div>
                {showPicker && (
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Pick a Color
                        </label>
                        <div className="w-full">
                            <ChromePicker
                                color={color}
                                onChangeComplete={handleColorChange}
                                className="w-full"
                                styles={{
                                    default: {
                                        picker: { width: '100%' },
                                    },
                                }}
                            />
                        </div>
                    </div>
                )}
                <div className="flex justify-end items-center gap-4 border-t pt-4">
                    <button
                        onClick={onCloseEditModal}
                        className="px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-all"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSaveClick}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
