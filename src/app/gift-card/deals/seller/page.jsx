"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { Avatar, Badge, Button, Divider, Rate, Tabs } from "antd";
import Image from "next/image";
import whatsapp from "@/app/assets/icons/whatsapp.svg";
import telegram from "@/app/assets/icons/telegram.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import mail from "@/app/assets/icons/mail.svg";
import phone from "@/app/assets/icons/phone.svg";
import snapchat from "@/app/assets/icons/snapchat.svg";
import facebook from "@/app/assets/icons/facebook.svg";
import tiktok from "@/app/assets/icons/tiktok.svg";
import twitter from "@/app/assets/icons/twitter.svg";
import Listings from "./components/Listings";
import Reviews from "./components/Reviews";

const Seller = () => {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <Header />
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 lg:gap-6 2xl:gap-8 w-full max-w-[1440px] py-8 md:py-12 lg:py-16 2xl:py-24 px-8 md:px-12 lg:px-20 2xl:px-28 relative">
        <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 col-span-full md:col-span-4 lg:col-span-5 2xl:col-span-4 md:sticky md:top-32 md:left-0 h-fit">
          <Badge dot="show" status="success" offset={[-10, 64]}>
            <Avatar size={72} />
          </Badge>
          <div className="flex flex-col gap-0.5">
            <p className="text-textHead text-xl lg:text-2xl 2xl:text-3xl font-medium">
              Rose Williams
            </p>
            <div className="flex items-center gap-2">
              <Rate allowHalf disabled value={4} />
              <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
              <p className="text-textBody font-medium text-sm lg:text-base">
                120 Items sold
              </p>
            </div>
          </div>
          <p className="text-sm lg:text-base text-textBody">
            Lange grambefangen denkst du brust du in werden darfst treibt ferne,
            schnee nun es dich gut dich lachtet teuren ward schwester, teuren es
            ich einz'ges schwester ich stund' gefärbt. O.
          </p>
          <Divider className="m-0" />
          <div className="flex flex-col gap-2 lg:gap-3">
            <p className="font-semibold text-sm lg:text-base text-[#344054]">
              Socials
            </p>
            <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={whatsapp} alt="Whatsapp" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={telegram} alt="Telegram" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={snapchat} alt="Snapchat" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={instagram} alt="Instagram" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={tiktok} alt="Tiktok" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={facebook} alt="Facebook" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={mail} alt="Mail" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={phone} alt="Phone" width={24} />
              </Button>
              <Button size="large" className="gap-1.5 lg:gap-2">
                <Image src={twitter} alt="Twitter" width={24} />
              </Button>
            </div>
          </div>
          <Divider className="m-0" />
          <Button
            size="large"
            type="primary"
            className="w-full self-center"
          >
            Message Seller
          </Button>
        </div>
        <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-6 col-span-full md:col-span-8 lg:col-span-7 2xl:col-span-8">
          <Tabs
            items={[
              { key: "1", label: "Listings", children: <Listings /> },
              { key: "2", label: "Reviews", children: <Reviews /> },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Seller;
