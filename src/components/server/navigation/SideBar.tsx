import Link from "next/link";
import { NavigationItem } from "../../client/navigation/Navigation";
import { NAV_ITEMS } from "@/lib/Navigation";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className=" fixed w-full h-full overflow-hidden justify-center bg-black grid items-center left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button
          className="fixed top-0 hover:scale-105 right-0 p-5"
          onClick={toggle}
        >
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <div className=" text-center text-xl">
          {NAV_ITEMS.map((item, index) => {
            return (
              <div
                onClick={toggle}
                className=" p-2 rounded-md my-1 hover:bg-gray-900 cursor-pointer"
              >
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })}
          <hr/>
          <div className=" text-center items-center flex text-white hover:text-indigo-400 h-12 rounded-lg cursor-pointer font-bold px-5">
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
