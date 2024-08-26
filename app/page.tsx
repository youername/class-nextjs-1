import DropdownMenu from "@/components/dropdownMenu";
import { FaMapPin } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex gap-6">
          {headerNav.map((item, index) => (
            <DropdownMenu menu={menus} key={index}>
              {item}
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
}

const headerNav = ["header", "slider", "benner", "contents", "footer"];

const menus = [
  { title: "menu 1", icon: <FaMapPin /> },
  { title: "menu 2" },
  { icon: <AiFillAndroid /> },
];
