"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { Avatar, Badge, Button, Carousel, Divider, Rate } from "antd";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import Link from "next/link";
import whatsapp from "@/app/assets/icons/whatsapp.svg";
import telegram from "@/app/assets/icons/telegram.svg";
import Image from "next/image";
import card from "@/app/assets/images/cards/cards.png";
import adidasCard from "@/app/assets/images/cards/adidasCard.png";
import giftCard from "@/app/assets/images/home/giftcard.jpeg";
import { useState } from "react";
import ContactModal from "./coponents/ContactModal";
import ReviewModal from "./coponents/ReviewModal";

const sliderImages = [card, adidasCard, giftCard];

const CardDetails = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const showContactModal = () => {
    setContactOpen(true);
  };
  const showReviewModal = () => {
    setReviewOpen(true);
  };
  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <Header />
      <div className="flex flex-col gap-6 lg:gap-12 2xl:gap-16 w-full max-w-[1440px] py-8 md:py-12 lg:py-16 2xl:py-24 px-8 md:px-12 lg:px-20 2xl:px-28">
        <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 mt-6">
          <div className="flex items-center gap-2 lg:gap-3 font-medium w-full">
            <Link
              href={"/gift-card/deals/find"}
              className="text-xs md:text-sm text-textBody hover:text-primary"
            >
              Gift Cards
            </Link>
            <span className="text-textBody">
              {parse(
                feather.icons["chevron-right"].toSvg({
                  class: "size-4 md:size-5",
                })
              )}
            </span>
            <p className="text-xs md:text-sm text-primary">Apple Itunes</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 2xl:gap-16 w-full no-scrollbar relative">
            <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 col-span-full lg:col-span-7">
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
                      // <a className="w-1/3">
                      //   <img
                      //     alt="Cards"
                      //     src={sliderImages[index]?.src}
                      //     className="w-full h-auto"
                      //   />
                      // </a>
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
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
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
                        <div className="flex items-center gap-2 lg:gap-3">
                          <Button size="large">
                            <Image src={whatsapp} alt="Whatsapp" />
                          </Button>
                          <Button size="large">
                            <Image src={telegram} alt="Telegram" />
                          </Button>
                          <Button size="large" onClick={showContactModal}>
                            {parse(
                              feather.icons["more-horizontal"].toSvg({
                                class: "",
                              })
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Divider className="m-0" />
                    <div className="flex flex-col gap-1.5 lg:gap-2">
                      <p className="text-textHead text-sm lg:text-base font-medium">
                        Brand
                      </p>
                      <p className="text-textBody text-sm lg:text-base">
                        Adidas
                      </p>
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
                  </div>
                  <div className="flex lg:flex-col gap-2 lg:gap-3 w-full">
                    <Button type="primary" size="large" className="w-full">
                      Make Payment
                    </Button>
                    <Button size="large" className="w-full">
                      Message Seller
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-3 lg:mt-32">
                  <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                    Description from Seller
                  </p>
                  <p className="text-textBody text-sm lg:text-base">
                    This $50 Amazon gift card is brand new and perfect for
                    online purchases, including electronics, books, and more.
                    The card is valid for 12 months, allowing you plenty of time
                    to use it for any items available on Amazon.
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
                <div className="flex flex-col gap-2 lg:gap-3">
                  <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                    Trade Terms and Conditions
                  </p>
                  <p className="text-textBody text-sm lg:text-base">
                    This $50 Amazon gift card is brand new and perfect for
                    online purchases, including electronics, books, and more.
                    The card is valid for 12 months, allowing you plenty of time
                    to use it for any items available on Amazon.
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
                <div className="flex flex-col gap-2 lg:gap-3">
                  <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                    Reviews
                  </p>
                  <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 p-4 lg:p-6 border border-[#f2f4f7] bg-gray-50 rounded-xl lg:rounded-2xl">
                    <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex gap-2 lg:gap-3 2xl:gap-4 items-center">
                          <Badge dot="show" status="success" offset={[-10, 56]}>
                            <Avatar size={64} />
                          </Badge>
                          <div className="flex flex-col gap-0.5">
                            <p className="text-[#344054] lg:text-lg font-medium">
                              Charles Hall
                            </p>
                            <Rate disabled value={4} />
                          </div>
                        </div>
                        <p className="text-textBody text-sm lg:text-base">
                          Nov 19, 2024
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 lg:gap-2">
                        <p className="text-textHead text-sm lg:text-base font-semibold">
                          Very good seller!
                        </p>
                        <p className="text-textBody text-sm lg:text-base">
                          Jugendlich mich sich vom erste der mich bringt wenn
                          geisterreich, drängt es herz weiten vom ihr weiten
                          herz, weiten schöne nun lebens der erste meinem nennt.
                          Einst es träne erfreuet.
                        </p>
                      </div>
                    </div>
                    <Divider className="m-0" />
                    <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex gap-2 lg:gap-3 2xl:gap-4 items-center">
                          <Badge dot="show" status="success" offset={[-10, 56]}>
                            <Avatar size={64} />
                          </Badge>
                          <div className="flex flex-col gap-0.5">
                            <p className="text-[#344054] lg:text-lg font-medium">
                              Charles Hall
                            </p>
                            <Rate disabled value={4} />
                          </div>
                        </div>
                        <p className="text-textBody text-sm lg:text-base">
                          Nov 19, 2024
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 lg:gap-2">
                        <p className="text-textHead text-sm lg:text-base font-semibold">
                          Very good seller!
                        </p>
                        <p className="text-textBody text-sm lg:text-base">
                          Jugendlich mich sich vom erste der mich bringt wenn
                          geisterreich, drängt es herz weiten vom ihr weiten
                          herz, weiten schöne nun lebens der erste meinem nennt.
                          Einst es träne erfreuet.
                        </p>
                      </div>
                    </div>
                    <Divider className="m-0" />
                    <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex gap-2 lg:gap-3 2xl:gap-4 items-center">
                          <Badge dot="show" status="success" offset={[-10, 56]}>
                            <Avatar size={64} />
                          </Badge>
                          <div className="flex flex-col gap-0.5">
                            <p className="text-[#344054] lg:text-lg font-medium">
                              Charles Hall
                            </p>
                            <Rate disabled value={4} />
                          </div>
                        </div>
                        <p className="text-textBody text-sm lg:text-base">
                          Nov 19, 2024
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 lg:gap-2">
                        <p className="text-textHead text-sm lg:text-base font-semibold">
                          Very good seller!
                        </p>
                        <p className="text-textBody text-sm lg:text-base">
                          Jugendlich mich sich vom erste der mich bringt wenn
                          geisterreich, drängt es herz weiten vom ihr weiten
                          herz, weiten schöne nun lebens der erste meinem nennt.
                          Einst es träne erfreuet.
                        </p>
                      </div>
                    </div>
                    <Divider className="m-0" />
                    <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex gap-2 lg:gap-3 2xl:gap-4 items-center">
                          <Badge dot="show" status="success" offset={[-10, 56]}>
                            <Avatar size={64} />
                          </Badge>
                          <div className="flex flex-col gap-0.5">
                            <p className="text-[#344054] lg:text-lg font-medium">
                              Charles Hall
                            </p>
                            <Rate disabled value={4} />
                          </div>
                        </div>
                        <p className="text-textBody text-sm lg:text-base">
                          Nov 19, 2024
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 lg:gap-2">
                        <p className="text-textHead text-sm lg:text-base font-semibold">
                          Very good seller!
                        </p>
                        <p className="text-textBody text-sm lg:text-base">
                          Jugendlich mich sich vom erste der mich bringt wenn
                          geisterreich, drängt es herz weiten vom ihr weiten
                          herz, weiten schöne nun lebens der erste meinem nennt.
                          Einst es träne erfreuet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <Button
                      type="link"
                      size="large"
                      icon={parse(feather.icons["chevron-down"].toSvg({}))}
                      iconPosition="end"
                    >
                      View More Reviews
                    </Button>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 lg:gap-3 bg-[#f5f8ff] p-4 lg:p-6 2xl:p-8 rounded-xl">
                    <div className="flex flex-col gap-1.5 lg:gap-2">
                      <p className="text-textHead lg:text-lg xl:text-xl font-medium">
                        What do you think about Tomiwa Paul
                      </p>
                      <p className="text-textBody text-sm lg:text-base xl:text-lg">
                        Help others know about your experience with Tomiwa Paul
                        by leaving a review.
                      </p>
                    </div>
                    <Button
                      type="primary"
                      size="large"
                      className="text-nowrap"
                      onClick={showReviewModal}
                    >
                      Leave a Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4 lg:gap-6 2xl:gap-8 col-span-full lg:col-span-5 sticky right-0 top-32 h-fit">
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
                  <div className="flex lg:flex-col xl:flex-row items-center lg:items-start xl:items-center justify-between gap-2">
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
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Button size="large">
                        <Image src={whatsapp} alt="Whatsapp" />
                      </Button>
                      <Button size="large">
                        <Image src={telegram} alt="Telegram" />
                      </Button>
                      <Button size="large" onClick={showContactModal}>
                        {parse(
                          feather.icons["more-horizontal"].toSvg({ class: "" })
                        )}
                      </Button>
                    </div>
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
              </div>
              <div className="flex md:flex-col gap-2 lg:gap-3 w-full">
                <Button type="primary" size="large">
                  Make Payment
                </Button>
                <Button size="large">Message Seller</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-2">
            <p className="text-2xl xl:text-3xl font-semibold text-textHead">
              Similar Items
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-x-4 2xl:gap-x-5 lg:gap-y-6 2xl:gap-y-8 w-full">
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4 w-full">
              <div className="bg-no-repeat bg-cover bg-center h-40 lg:h-44 2xl:h-48 rounded-lg xl:rounded-xl w-full bg-[url('./assets/images/cards/adidasCard.png')]">
                <div className="h-full w-full flex opacity-0 hover:opacity-100 duration-500 transition-opacity bg-black/40 p-4 justify-end rounded-lg xl:rounded-xl">
                  <div className="bg-white rounded-md p-1.5 lg:p-2 flex items-center justify-center h-fit w-fit">
                    {parse(
                      feather.icons["heart"].toSvg({
                        class:
                          "text-[#667084] size-3 lg:size-4 hover:cursor-pointer",
                      })
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="text-sm lg:text-base xl:text-lg font-semibold">
                  Apple Itunes Gift Card
                </p>
                <div className="flex gap-2 lg:gap-3 items-center">
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
                  <span className="bg-[#D0D5DD] size-1 lg:size-1.5 rounded-full"></span>
                  <p className="text-textBody font-medium text-sm lg:text-base">
                    Leah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal setOPen={setContactOpen} open={contactOpen} />
      <ReviewModal setOPen={setReviewOpen} open={reviewOpen} />
      <Footer />
    </div>
  );
};

export default CardDetails;
