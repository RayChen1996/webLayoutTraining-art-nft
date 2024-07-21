import logoSvg from "../../../public/logo.svg";
import { SearchIcon, Wallet2Icon, MenuIcon } from "lucide-react";
export default function AppHeader() {
  return (
    <div className="sticky top-0 flex items-center border-b-2 border-black gap-4 px-4 h-[104px]">
      <div className="flex-1 flex">
        <img src={logoSvg} alt="Logo" className="my-8" />
      </div>
      <div className="hidden lg:flex border-x-2 border-black  items-center h-[104px] justify-center">
        <label className="flex items-center px-12 ">
          <input
            type="text"
            className="input bg-opacity-0 min-w-60"
            placeholder="搜尋作品名稱、藝術家名稱"
          />
          <SearchIcon />
        </label>
      </div>
      <button className="my-10 px-12  hidden   lg:flex items-center justify-center h-full border-r-2 border-black">
        探索
      </button>
      <button className="my-10  px-12 hidden lg:flex items-center justify-center   h-full border-r-2 border-black">
        市值
      </button>
      <button className="my-10 hidden px-12 lg:flex items-center justify-center ">
        <Wallet2Icon className="fill-black" />
      </button>

      <div className="md:hidden flex items-center gap-[18px]">
        <button className=" flex items-center justify-center">
          <SearchIcon />
        </button>
        <button className="flex items-center justify-center">
          <MenuIcon className="fill-black" />
        </button>
      </div>
    </div>
  );
}
