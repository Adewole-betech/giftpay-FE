"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { useState } from "react";
import CardDetails from "./components/Details";
import CardImages from "./components/Images";
import CardPrice from "./components/Price";
import Socials from "./components/Socials";

const SellCards = () => {
  const [step, setStep] = useState(0);
  const [sellDetails, setSellDetails] = useState({});
  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <Header />
      <div className="flex flex-col items-center w-full max-w-[1440px] py-8 md:py-12 lg:py-16 2xl:py-24 gap-6 lg:gap-12 2xl:gap-16 px-8 md:px-12 lg:px-20 2xl:px-28 mt-6">
        <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 w-full md:max-w-[80%] lg:max-w-[70] xl:max-w-[65%] 2xl:max-w-[50%] ">
          <div className="flex flex-col gap-2 lg:gap-3">
            <p className="font-semibold text-textHead text-xl md:text-2xl 2xl:text-3xl">
              Sell Your Gift Cards Instantly
            </p>
            <p className="text-textBody text-sm lg:text-base">
              Connect with buyers, set your own terms, and enjoy a seamless
              selling experience.
            </p>
          </div>
          <div className="grid w-full grid-cols-4 gap-2 lg:gap-4">
            {Array.from({ length: 4 }, (_, i) => i).map((ind) => (
              <div
                key={ind}
                className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 2xl:gap-3.5"
              >
                <div
                  className={`h-1 w-full ${
                    step >= ind ? "bg-[#004EEB]" : "bg-[#EAECF0]"
                  }`}
                ></div>
                <p
                  className={`text-xs lg:text-sm font-medium ${
                    step >= ind ? "text-[#004EEB]" : "text-[#344054]"
                  }`}
                >
                  {ind === 0
                    ? "Gift Card Details"
                    : ind === 1
                    ? "Upload Images"
                    : ind === 2
                    ? "Set Your Price"
                    : "Add Your Socials"}
                </p>
              </div>
            ))}
          </div>
          {step === 0 && (
            <CardDetails
              setStep={setStep}
              sellDetails={sellDetails}
              setSellDetails={setSellDetails}
            />
          )}
          {step === 1 && (
            <CardImages
              setStep={setStep}
              sellDetails={sellDetails}
              setSellDetails={setSellDetails}
            />
          )}
          {step === 2 && (
            <CardPrice
              setStep={setStep}
              sellDetails={sellDetails}
              setSellDetails={setSellDetails}
            />
          )}
          {step === 3 && (
            <Socials
              setStep={setStep}
              sellDetails={sellDetails}
              setSellDetails={setSellDetails}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellCards;
