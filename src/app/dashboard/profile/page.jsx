"use client";

import Listings from "@/app/gift-card/deals/seller/components/Listings";
import { Button, Tabs } from "antd";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";

const MyProfile = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 w-full">
      <p className="font-semibold text-xl md:text-2xl 2xl:text-3xl">
        My Profile
      </p>
      <Tabs
        items={[
          { key: "1", label: "Personal Information" },
          { key: "2", label: "My Reviews" },
          { key: "3", label: "Payments" },
          { key: "4", label: "Payouts" },
          { key: "5", label: "Passwords" },
        ]}
      />
    </div>
  );
};

export default MyProfile;
