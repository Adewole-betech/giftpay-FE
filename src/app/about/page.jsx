"use client";

import { Button } from "antd";
import Header from "../components/header";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/footer";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <Header />
      <div className="flex flex-col items-center w-full mt-6">
        <div className="flex flex-col items-center w-full max-w-[1440px] px-8 md:px-12 lg:px-20 2xl:px-28 py-8 md:py-12 lg:py-16 2xl:py-24 gap-6 lg:gap-10 2xl:gap-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 2xl:gap-24">
            <p className="font-semibold text-2xl md:text-3xl 2xl:text-4xl max-w-[90%] md:max-w-[80%]">
              Welcome to Ugifty, your go-to marketplace for simple, secure, and
              direct gift card trading.
            </p>
            <p className="text-textBody text-lg lg:text-xl lg:leading-[2rem]">
              Our platform connects buyers and sellers effortlessly, enabling
              you to set your price, negotiate directly, and complete
              transactions with confidence using secure payment links.
            </p>
          </div>
          <div className="bg-cover bg-center bg-no-repeat rounded-lg bg-[url('./assets/images/about/giftcard.jpeg')] h-96 md:h-[28rem] lg:h-[32rem] w-full"></div>
          <p className="text-textBody text-lg lg:text-xl lg:leading-[2rem] md:max-w-[70%] lg:max-w-[55%] xl:max-w-[45%]">
            With streamlined listings, on-platform messaging, and top-tier
            customer support, we're dedicated to making every exchange seamless
            and transparent. Whether selling unused cards or finding the best
            deals, we're here to make trading straightforward, flexible, and
            reliable.
          </p>
        </div>
        <div className="flex flex-col items-center bg-[#F5F8FF] w-full">
          <div className="flex flex-col items-center w-full max-w-[1440px] px-8 md:px-12 lg:px-20 2xl:px-28 py-8 md:py-12 lg:py-16 2xl:py-24 gap-6 lg:gap-12 2xl:gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <p className="font-semibold text-2xl md:text-3xl 2xl:text-4xl max-w-[80%]">
                Exclusive Marketplace for Premium Gift Card Trading
              </p>
              <p className="text-textBody text-lg lg:text-xl lg:leading-[2rem]">
                At Ugifty we redefine how you trade gift cards—providing you
                with a refined, secure, and direct marketplace.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white p-6 flex flex-col gap-6 lg:gap-8">
                <div className="flex items-center justify-center bg-[#D1E0FF] p-2 lg:p-3 rounded-lg w-fit h-fit">
                  {parse(
                    feather.icons["gift"].toSvg({
                      class: "size-6 lg:size-8 text-primary",
                    })
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-lg lg:text-xl">
                    Tailored Listings
                  </p>
                  <p className="text-sm md:text-base text-textBody leading-snug md:leading-normal">
                    Create personalized gift card offers that fit your needs.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 flex flex-col gap-6 lg:gap-8">
                <div className="flex items-center justify-center bg-[#D1E0FF] p-2 lg:p-3 rounded-lg w-fit h-fit">
                  {parse(
                    feather.icons["message-square"].toSvg({
                      class: "size-6 lg:size-8 text-primary",
                    })
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-lg lg:text-xl">
                    Direct Negotiations
                  </p>
                  <p className="text-sm md:text-base text-textBody leading-snug md:leading-normal">
                    Enjoy the freedom to discuss your terms directly with buyers
                    or sellers.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 flex flex-col gap-6 lg:gap-8">
                <div className="flex items-center justify-center bg-[#D1E0FF] p-2 lg:p-3 rounded-lg w-fit h-fit">
                  {parse(
                    feather.icons["lock"].toSvg({
                      class: "size-6 lg:size-8 text-primary",
                    })
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-lg lg:text-xl">
                    Secure Transactions
                  </p>
                  <p className="text-sm md:text-base text-textBody leading-snug md:leading-normal">
                    Secure payments with optional payment links, ensuring every
                    trade is risk-free.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 flex flex-col gap-6 lg:gap-8">
                <div className="flex items-center justify-center bg-[#D1E0FF] p-2 lg:p-3 rounded-lg w-fit h-fit">
                  {parse(
                    feather.icons["shield"].toSvg({
                      class: "size-6 lg:size-8 text-primary",
                    })
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-lg lg:text-xl">
                    Trusted & Transparent
                  </p>
                  <p className="text-sm md:text-base text-textBody leading-snug md:leading-normal">
                    Every listing undergoes a quick review to ensure
                    authenticity and value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col w-full max-w-[1440px] px-8 md:px-12 lg:px-20 2xl:px-28 py-8 md:py-12 lg:py-16 2xl:py-24 gap-6 lg:gap-12 2xl:gap-16 relative">
            <div className="flex flex-col items-center gap-2 lg:gap-3">
              <p className="text-primary text-sm lg:text-base">Our Vision</p>
              <p className="font-semibold text-3xl md:text-4xl 2xl:text-5xl md:max-w-[90%] lg:max-w-[80%] xl:max-w-[60%] 2xl:max-w-[80%] text-center">
                To empower users with a trustworthy, user-driven marketplace for
                effortless gift card trading.
              </p>
            </div>
            <div className="bg-cover bg-center bg-no-repeat rounded-lg bg-[url('./assets/images/home/giftcard.jpeg')] h-96 md:h-[32rem]"></div>
            <div className="h-4 md:h-0 bg-transparent">
              <div className="flex flex-col lg:flex-row items-start gap-4 2xl:gap-6 bg-[#004eeb] text-white rounded-lg shadow-xl relative top-[35%] p-6 md:p-10 lg:p-12 2xl:p-16 w-full">
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                    Find the Perfect Gift Card Deals!
                  </p>
                  <p className="text-lg lg:text-xl lg:leading-[2rem]">
                    Buy or sell gift cards effortlessly. Enjoy personalized
                    offers, direct negotiations, and secure transactions. Start
                    trading now with confidence!
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gp-3">
                  <Button
                    size={isMobile ? "default" : "large"}
                    className="bg-white text-[#344054] hover:!bg-white hover:!text-primary"
                    type="primary"
                  >
                    Sell Now
                  </Button>
                  <Button
                    size={isMobile ? "default" : "large"}
                    className="bg-white text-[#344054] hover:!bg-white hover:!text-primary"
                    type="primary"
                  >
                    Discover Deals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
