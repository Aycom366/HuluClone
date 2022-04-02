import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import react from "react";

const Header = react.memo(() => {
  return (
    <header className="flex flex-col sm:flex-row m-5 h-auto justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        width={150}
        height={100}
        src="https://links.papareact.com/ua6"
        alt="hulu logo"
      />
    </header>
  );
});

export default Header;
