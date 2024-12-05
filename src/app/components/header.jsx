"use client";

import Image from "next/image";
import logo from "../assets/icons/logo.svg";
import Link from "next/link";
import { Button, Dropdown, Space } from "antd";
import React, { useState } from "react";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";

const items = [
  {
    key: "1",
    label: (
      <Link href={""} className="flex items-center gap-3 lg:gap-4 p-2 lg:p-3">
        <div className="flex items-center justify-center bg-[#D1E0FF] p-2 lg:p-3 rounded-lg">
          {parse(
            feather.icons["shopping-cart"].toSvg({
              class: "size-6 lg:size-8 text-primary",
            })
          )}
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
  {
    key: "2",
    label: (
      <Link href={""} className="flex items-center gap-3 lg:gap-4 p-2 lg:p-3">
        <div className="flex items-center justify-center bg-[#D1E0FF] p-2 lg:p-3 rounded-lg">
          {parse(
            feather.icons["tag"].toSvg({
              class: "size-6 lg:size-8 text-primary",
            })
          )}
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-medium text-sm lg:text-base">Sell Gift Cards</p>
          <p className="text-textBody text-xs md:text-sm">
            Connect with buyers.
          </p>
        </div>
      </Link>
    ),
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full items-center justify-center h-fit relative top-4 lg:top-6 2xl:top-8 font-graphik">
      <div className=" max-w-[1440px] w-full px-8 md:px-12 lg:px-20 2xl:px-28">
        <div className="flex items-center justify-between px-4 lg:px-6 2xl:px-8 py-3 lg:py-4 2xl:py-[1.125rem] bg-white shadow-sm rounded-xl">
          <div className="flex items-center gap-3 lg:gap-4">
            <Image src={logo} width={32} height={32} />
            <p className="font-bold text-xl lg:text-2xl">UGifty</p>
          </div>
          <div className="flex items-center gap-6 lg:gap-10 2xl:gap-12">
            <div className="flex items-center gap-4 lg:gap-6 2xl:gap-8 font-medium">
              <Link href={"/"} className="hover:text-primary">
                Home
              </Link>
              <Dropdown
                trigger={["click"]}
                menu={{ items }}
                placement="bottom"
                overlayClassName="mt-2"
                onOpenChange={(open) => {
                  setOpen(open);
                }}
              >
                <a
                  className="hover:cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space className="hover:text-primary">
                    Gift Cards
                    {open
                      ? parse(
                          feather.icons["chevron-up"].toSvg({
                            class: "size-5 transition-transform duration-500",
                          })
                        )
                      : parse(
                          feather.icons["chevron-down"].toSvg({
                            class: "size-5 transition-transform duration-500",
                          })
                        )}
                    {/* <i data-feather="shopping-cart"></i> */}
                  </Space>
                </a>
              </Dropdown>
              <Link href={"/frequent-questions"} className="hover:text-primary">
                FAQ
              </Link>
              <Link href={"/about"} className="hover:text-primary">
                About Us
              </Link>
            </div>
            <div className="flex items-center gap-4 lg:gap-6 2xl:gap-8 font-medium">
              <Link href={"/auth/login"} className="hover:text-primary">
                Log in
              </Link>
              <Button size="large" type="primary">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
