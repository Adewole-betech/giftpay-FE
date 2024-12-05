"use client";

import Image from "next/image";
import logo from "../assets/icons/logo.svg";
import Link from "next/link";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <Link className="flex items-center gap-3 lg:gap-4 p-2 lg:p-3">
        <div className="flex items-center justify-center bg-[#D1E0FF] p-2 lg:p-3 rounded-lg">
          <i data-feather="shopping-cart" className="size-4 lg:size-6"></i>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-medium text-sm lg:text-base">Buy Gift Cards</p>
          <p className="text-textBody text-xs md:text-sm">
            Browse a range of gift cards.
          </p>
        </div>
      </Link>
    ),
  },
];

const Header = () => {
  return (
    <div className="flex w-full items-center justify-center h-fit relative top-4 lg:top-6 2xl:top-8 font-graphik">
      <div className=" max-w-[1440px] w-full px-8 md:px-12 lg:px-20 2xl:px-28">
        <div className="flex items-center justify-between px-4 lg:px-6 2xl:px-8 py-3 lg:py-4 2xl:py-[1.125rem] bg-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center gap-3 lg:gap-4">
            <Image src={logo} width={32} height={32} />
            <p className="font-bold text-xl lg:text-2xl">UGifty</p>
          </div>
          <div className="flex items-center gap-6 lg:gap-10 2xl:gap-12">
            <div className="flex items-center gap-4 lg:gap-6 2xl:gap-8 font-medium">
              <Link href={"/"} className="">
                Home
              </Link>
              <Dropdown trigger={["click"]} items={{ items }}>
                <Space>
                  Gift Cards
                  <i
                    data-feather="chevron-down"
                    className="size-3 text-textBody"
                  ></i>
                </Space>
              </Dropdown>
              <Link href={"/frequent-questions"} className="">
                FAQ
              </Link>
              <Link href={"/about"} className="">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
