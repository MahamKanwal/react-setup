import React from "react";
import { IoMdClose } from "react-icons/io";
const Drawer = ({ children, title, size="400px", isOpen, onClose }) => {
  return (
    <div
      className="w-full inset-0 min-h-screen fixed bg-black/40"
      onClick={onClose}
      style={{display: isOpen ? "block" : "none"}}
    >
      <div
        className="top-0 right-0 w-full absolute bg-white h-full duration-500 delay-200 flex flex-col overflow-hidden"
        style={{
          maxWidth: isOpen ? size : "0px",
        }}
        onClick={(e)=>e.stopPropagation()}
      >
        {/* header */}
        <header className="flex justify-between items-center border-b-2 border-gray pb-2 p-3">
          <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
          <button onClick={onClose}>
            <IoMdClose className="text-2xl" />
          </button>
        </header>

        {/* render form fields passed as children */}
        <div className="flex-1 overflow-y-auto p-3">{children}</div>

        {/* footer */}
        <div className="flex gap-2 justify-end border-t-2 border-gray-200 p-3">
          <button className="rounded-lg border px-5 py-1" onClick={onClose}>
            Cancel
          </button>
          <button className="rounded-lg border px-5 py-1">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
