import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className="flex justify-between dark:text-white items-center px-6 py-3 bg-white dark:bg-black shadow-md transition-all duration-300">
      <h1 className="text-2xl font-bold tracking-wide">My Premium App</h1>

      <ul className="flex gap-5 font-bold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Users</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <FaSun className="h-6 w-6 text-yellow-300" />
        ) : (
          <FaMoon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default TopBar;
