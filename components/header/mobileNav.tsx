import Link from "next/link";

import React from "react";

interface Props {
  item: { title: string; url: string };
  index: number;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<Props> = ({ item, index, setShowMobileMenu }) => {
  return (
    <Link href={item.url} key={index} onClick={() => setShowMobileMenu(false)}>
      {item.title}
    </Link>
  );
};

export default MobileNav;

// export function MobileNav(
//   item: { title: string; url: string },
//   index: number,
//   setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
// ): React.JSX.Element {
//   return (

//   );
// }
