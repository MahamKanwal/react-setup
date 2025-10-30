import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
const Drawer = ({ children, title, size = "md" }) => {
  const navigate = useNavigate();

  const toggleDrawer = () => navigate(-1);

  const sizeClasses = {
    sm: "max-w-[300px]",
    md: "max-w-[500px]",
    lg: "max-w-[800px]",
    full: "max-w-full",
  };

  return (
    <div
      className="w-full inset-0 min-h-screen fixed bg-black/40"
      onClick={toggleDrawer}
    >
      <div
        className={twMerge(
          "top-0 right-0 w-full absolute bg-white h-full duration-500 delay-200 flex flex-col overflow-hidden",
          sizeClasses[size]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center border-b-2 border-gray pb-2 p-3">
          <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
          <button onClick={toggleDrawer}>
            <IoMdClose className="text-2xl" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-3">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
