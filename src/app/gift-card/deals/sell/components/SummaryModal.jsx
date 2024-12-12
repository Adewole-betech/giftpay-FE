"use client";

import { Avatar, Badge, Button, Carousel, Divider, Modal, Rate } from "antd";
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
import card from "@/app/assets/images/cards/cards.png";
import adidasCard from "@/app/assets/images/cards/adidasCard.png";
import giftCard from "@/app/assets/images/home/giftcard.jpeg";
import { useMediaQuery } from "react-responsive";

const sliderImages = [card, adidasCard, giftCard];

const Summary = ({ summary, open, setOpen }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px, max-width:1223px)",
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px, max-width: 1439px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="Preview"
      open={open}
      onCancel={handleCancel}
      footer={
        <>
          <Button size="large">
            Save for Later
          </Button>
          <Button size="large" type="primary" htmlType="submit">
            Sell Your Gift Card
          </Button>
        </>
      }
      centered
      width={
        isMobile ? "90%" : isTablet ? "85%" : isDesktopOrLaptop ? "70%" : "60%"
      }
    >
      <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 max-h-[85vh] overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 2xl:gap-16 w-full no-scrollbar relative">
          <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 col-span-full lg:col-span-6 sticky right-0 top-0 h-fit">
            <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
              <Carousel
                autoplay={true}
                draggable
                dotsClass="slick-dots slick-thumb"
                appendDots={(dots) => (
                  <div className="w-full">
                    <ul className="w-full grid grid-cols-4 justify-center gap-3 relative -bottom-6">
                      {dots}
                    </ul>
                  </div>
                )}
                customPaging={function (index) {
                  const src = sliderImages[index]?.src;
                  return (
                    <a
                      style={{ backgroundImage: `url(${src})` }}
                      className={`bg-cover bg-no-repeat bg-center w-full h-20 md:h-28 xl:h-32 rounded-md flex`}
                    ></a>
                  );
                }}
              >
                <div className="w-full h-72 md:h-96 xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-center bg-[url('./assets/images/cards/cards.png')]"></div>
                <div className="w-full h-72 md:h-96 xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-center bg-[url('./assets/images/cards/adidasCard.png')]"></div>
                <div className="w-full h-72 md:h-96 xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-center bg-[url('./assets/images/home/giftcard.jpeg')]"></div>
              </Carousel>
              <div className="flex lg:hidden flex-col gap-4 lg:gap-6 2xl:gap-8 mt-32">
                <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4">
                  <div className="flex flex-col gap-1.5 lg:gap-2">
                    <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-textHead">
                      Apple Itunes Digital Gift Card for $10 Value
                    </p>
                    <p className="lg:text-lg 2xl:text-xl text-textBody">
                      Define every aspect of your gift card—type, face value,
                      condition, validity, and your selling price. Showcase
                      premium listings that stand out to discerning buyers.
                    </p>
                    <div className="flex items-center">
                      <span className="text-[0.5rem] md:text-xs 2xl:text-sm font-bold">
                        $
                      </span>
                      <span className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                        59
                      </span>
                      <span className="text-[0.5rem] md:text-xs 2xl:text-sm font-bold">
                        .99
                      </span>
                    </div>
                  </div>
                  <Divider className="m-0" />
                  <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4">
                    <p className="text-textHead text-sm lg:text-base font-medium">
                      Seller Information
                    </p>
                    <div className="flex gap-2 lg:gap-3 2xl:gap-4 items-center">
                      <Badge dot="show" status="success" offset={[-10, 56]}>
                        <Avatar size={64} />
                      </Badge>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[#344054] lg:text-lg font-medium">
                          Bessie Payne
                        </p>
                        <Rate disabled value={4} />
                      </div>
                    </div>
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
                  <div className="flex flex-col gap-1.5 lg:gap-2">
                    <p className="text-textHead text-sm lg:text-base font-medium">
                      Brand
                    </p>
                    <p className="text-textBody text-sm lg:text-base">Adidas</p>
                  </div>
                  <Divider className="m-0" />
                  <div className="flex flex-col gap-1.5 lg:gap-2">
                    <p className="text-textHead text-sm lg:text-base font-medium">
                      Condition
                    </p>
                    <p className="text-textBody text-sm lg:text-base">Used</p>
                  </div>
                  <Divider className="m-0" />
                  <div className="flex flex-col gap-1.5 lg:gap-2">
                    <p className="text-textHead text-sm lg:text-base font-medium">
                      Validity
                    </p>
                    <p className="text-textBody text-sm lg:text-base">
                      6 months
                    </p>
                  </div>
                  <Divider className="m-0" />
                  <div className="flex flex-col gap-2 lg:gap-3 lg:mt-32">
                    <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                      Description from Seller
                    </p>
                    <p className="text-textBody text-sm lg:text-base">
                      This $50 Amazon gift card is brand new and perfect for
                      online purchases, including electronics, books, and more.
                      The card is valid for 12 months, allowing you plenty of
                      time to use it for any items available on Amazon.
                      <br />
                      Fast and Secure: The seller promises immediate card
                      delivery upon payment confirmation.
                      <br />
                      Flexible Payment Options: You can pay via bank transfer,
                      Bitcoin, or PayPal for convenience.
                      <br />
                      No Returns: All sales are final; please ensure all terms
                      are agreed upon before completing the transaction.
                    </p>
                  </div>
                  <Divider className="m-0" />
                  <div className="flex flex-col gap-2 lg:gap-3">
                    <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                      Trade Terms and Conditions
                    </p>
                    <p className="text-textBody text-sm lg:text-base">
                      This $50 Amazon gift card is brand new and perfect for
                      online purchases, including electronics, books, and more.
                      The card is valid for 12 months, allowing you plenty of
                      time to use it for any items available on Amazon.
                      <br />
                      Fast and Secure: The seller promises immediate card
                      delivery upon payment confirmation.
                      <br />
                      Flexible Payment Options: You can pay via bank transfer,
                      Bitcoin, or PayPal for convenience.
                      <br />
                      No Returns: All sales are final; please ensure all terms
                      are agreed upon before completing the transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-4 lg:gap-6 2xl:gap-8 col-span-full lg:col-span-6">
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4">
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-textHead">
                  Apple Itunes Digital Gift Card for $10 Value
                </p>
                <p className="lg:text-lg 2xl:text-xl text-textBody">
                  Define every aspect of your gift card—type, face value,
                  condition, validity, and your selling price. Showcase premium
                  listings that stand out to discerning buyers.
                </p>
                <div className="flex items-center">
                  <span className="text-[0.5rem] md:text-xs 2xl:text-sm font-bold">
                    $
                  </span>
                  <span className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                    59
                  </span>
                  <span className="text-[0.5rem] md:text-xs 2xl:text-sm font-bold">
                    .99
                  </span>
                </div>
              </div>
              <Divider className="m-0" />
              <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4">
                <p className="text-textHead text-sm lg:text-base font-medium">
                  Seller Information
                </p>
                <div className="flex gap-2 lg:gap-3 2xl:gap-4 items-center">
                  <Badge dot="show" status="success" offset={[-10, 56]}>
                    <Avatar size={64} />
                  </Badge>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[#344054] lg:text-lg font-medium">
                      Bessie Payne
                    </p>
                    <Rate disabled value={4} />
                  </div>
                </div>
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
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-textHead text-sm lg:text-base font-medium">
                  Brand
                </p>
                <p className="text-textBody text-sm lg:text-base">Adidas</p>
              </div>
              <Divider className="m-0" />
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-textHead text-sm lg:text-base font-medium">
                  Condition
                </p>
                <p className="text-textBody text-sm lg:text-base">Used</p>
              </div>
              <Divider className="m-0" />
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-textHead text-sm lg:text-base font-medium">
                  Validity
                </p>
                <p className="text-textBody text-sm lg:text-base">6 months</p>
              </div>
              <Divider className="m-0" />
              <div className="flex flex-col gap-2 lg:gap-3">
                <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                  Description from Seller
                </p>
                <p className="text-textBody text-sm lg:text-base">
                  This $50 Amazon gift card is brand new and perfect for online
                  purchases, including electronics, books, and more. The card is
                  valid for 12 months, allowing you plenty of time to use it for
                  any items available on Amazon.
                  <br />
                  Fast and Secure: The seller promises immediate card delivery
                  upon payment confirmation.
                  <br />
                  Flexible Payment Options: You can pay via bank transfer,
                  Bitcoin, or PayPal for convenience.
                  <br />
                  No Returns: All sales are final; please ensure all terms are
                  agreed upon before completing the transaction.
                </p>
              </div>
              <Divider className="m-0" />
              <div className="flex flex-col gap-2 lg:gap-3">
                <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                  Trade Terms and Conditions
                </p>
                <p className="text-textBody text-sm lg:text-base">
                  This $50 Amazon gift card is brand new and perfect for online
                  purchases, including electronics, books, and more. The card is
                  valid for 12 months, allowing you plenty of time to use it for
                  any items available on Amazon.
                  <br />
                  Fast and Secure: The seller promises immediate card delivery
                  upon payment confirmation.
                  <br />
                  Flexible Payment Options: You can pay via bank transfer,
                  Bitcoin, or PayPal for convenience.
                  <br />
                  No Returns: All sales are final; please ensure all terms are
                  agreed upon before completing the transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full justify-end gap-2 lg:gap-3"></div>
      </div>
    </Modal>
  );
};

export default Summary;
