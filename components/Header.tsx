import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Logo from "../public/logo.png";
import { HiMoon, HiOutlineShoppingCart, HiSun } from "react-icons/hi";
import Image from "next/image";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <HiSun
          className="w-7 h-7 text-yellow-400"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <HiMoon
          className="w-7 h-7 text-gray-700"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <header className="bg-gray-200 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
      <div className="mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Image
          width="50"
          height="50"
          src="/logo.png"
          alt="logo"
          className="select-none"
        />

        <div className="flex justify-around items-end">
          <button className="bg-indigo-600 select-none text-white text-sm leading-6 font-medium shadow-lg shadow-indigo-500/30 px-2 py-1 rounded-lg hover:bg-indigo-800">
            Connect Wallet
          </button>
          <div className="flex justify-evenly items-center cursor-pointer bg-indigo-600 p-1.5 px-2 rounded-lg mx-3 hover:bg-indigo-800">
            <HiOutlineShoppingCart className="w-5 h-5 text-white realtive" />
            <p className="mx-3 text-white select-none text-sm font-medium">
              Cart
            </p>
            <p className="select-none w-5 h-5 text-center flex justify-center items-center dark:text-indigo-600 bg-white text-sm px-2 rounded-md">
              0
            </p>
          </div>

          {renderThemeChanger()}
        </div>
      </div>
    </header>
  );
};

export default Header;
