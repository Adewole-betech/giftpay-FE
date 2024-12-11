"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import {
  Button,
  Checkbox,
  Collapse,
  Drawer,
  Input,
  Segmented,
  Select,
} from "antd";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import { useState } from "react";

const FindDeals = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const showDrawer = () => {
    setOpenFilter(true);
  };
  const onClose = () => {
    setOpenFilter(false);
  };

  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <Header />
      <div className="flex flex-col w-full max-w-[1440px] bg-cover bg-no-repeat bg-center bg-[url('./assets/images/cards/cards.png')] h-fit relative -mt-20">
        <div className="flex flex-col items-center bg-black/50 w-full h-full">
          <div className="flex flex-col items-center w-full relative">
            <div className="flex flex-col items-center justify-center mt-24 w-full lg:h-screen 2xl:h-fit px-8 md:px-12 lg:px-20 2xl:px-28 py-8 md:py-12 lg:py-16 2xl:py-24">
              <div className="flex flex-col items-center gap-3 lg:gap-4 2xl:gap-6 text-white text-center w-full">
                <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold leading-[3rem] lg:leading-[4rem] 2xl:leading-[4.5rem]">
                  Find Your Perfect Gift Cards Deals
                </p>
                <p className="lg:text-lg 2xl:text-xl lg:max-w-[80%] xl:max-w-[55%] 2xl:max-w-[48%]">
                  Choose from a wide range of high-demand gift cards, spanning
                  retail, gaming, entertainment, and more.
                </p>
                <Input
                  addonBefore={
                    <Select
                      defaultValue={"Brand"}
                      className="bg-white"
                      popupClassName="!w-36"
                    >
                      <Select.Option value="brand">Brand</Select.Option>
                      <Select.Option value="category">Category</Select.Option>
                    </Select>
                  }
                  prefix={
                    <span>
                      {parse(
                        feather.icons["search"].toSvg({
                          class: "text-[#667084]",
                        })
                      )}
                    </span>
                  }
                  size="large"
                  placeholder="Search for gift cards"
                  className="md:max-w-[80%] lg:max-w-[70%] xl:max-w-[55%] 2xl:max-w-[48%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1440px] px-8 md:px-12 lg:px-20 2xl:px-28 py-8 md:py-12 lg:py-16 2xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 2xl:gap-8 relative">
          <div className="hidden md:flex flex-col gap-3 md:gap-4 lg:gap-5 sticky left-0 top-32 w-full col-span-full md:col-span-3 lg:col-span-4 2xl:col-span-3 h-fit">
            <div className="flex flex-col">
              <Collapse
                expandIconPosition="end"
                expandIcon={({ isActive }) => (
                  <span>
                    {parse(
                      feather.icons["chevron-down"].toSvg({
                        class: `size-5 transition-all duration-1000 ${
                          isActive ? "-rotate-180" : "rotate-0"
                        }`,
                      })
                    )}
                  </span>
                )}
                // size="large"
                defaultActiveKey={["1", "2", "3", "4"]}
                bordered={false}
                className="w-full"
                items={[
                  {
                    key: "1",
                    label: <p className="font-medium">Brand</p>,
                    children: (
                      <Checkbox.Group
                        options={[
                          { label: "Adidas", value: "adidas" },
                          { label: "Amazon", value: "amazon" },
                          { label: "Apple", value: "apple" },
                          { label: "Best Buy", value: "best buy" },
                          { label: "Ebay", value: "ebay" },
                          { label: "EB Games", value: "eb games" },
                          { label: "Microsoft", value: "microsoft" },
                        ]}
                        className="gap-2 lg:gap-3 flex-col"
                      ></Checkbox.Group>
                    ),
                  },
                  {
                    key: "2",
                    label: <p className="font-medium">Condition</p>,
                    children: (
                      <Checkbox.Group
                        options={[
                          { label: "New", value: "new" },
                          { label: "Lightly Used", value: "lightly used" },
                          { label: "Used", value: "used" },
                          { label: "Not Specified", value: "" },
                        ]}
                        className="gap-2 lg:gap-3 flex-col"
                      />
                    ),
                  },
                  {
                    key: "3",
                    label: <p className="font-medium">Validity</p>,
                    children: (
                      <Checkbox.Group
                        options={[
                          { label: "1 Month", value: "1 month" },
                          { label: "3 Months", value: "1 months" },
                          { label: "6 Months", value: "6 months" },
                          { label: "1 year", value: "12 months" },
                        ]}
                        className="gap-2 lg:gap-3 flex-col"
                      />
                    ),
                  },
                  {
                    key: "4",
                    label: <p className="font-medium">Price</p>,
                    children: (
                      <>
                        <Checkbox.Group
                          options={[
                            { label: "Below $10", value: "0-10" },
                            { label: "$10 - $50", value: "10-50" },
                            { label: "$50 - $100", value: "50-100" },
                          ]}
                          className="gap-2 lg:gap-3 flex-col"
                        />
                        <div className="flex items-center justify-between mt-2 lg:mt-3 gap-1 lg:gap-2">
                          <Input prefix="$" />
                          <p className="text-sm lg:text-base text-textBody">
                            to
                          </p>
                          <Input prefix="$" />
                        </div>
                      </>
                    ),
                  },
                ]}
              />
              <div className="flex pt-3 lg:pt-4 2xl:pt-5 border-t">
                <Button size="large" type="primary" className="w-full">
                  Find Offers
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-6 col-span-full md:col-span-9 lg:col-span-8 2xl:col-span-9">
            <div className="flex overflow-x-auto border no-scrollbar rounded-md lg:rounded-lg w-full xl:w-fit lg:self-center">
              <Segmented
                size="large"
                className="font-medium lg:w-fit gap-2"
                options={[
                  {
                    label: (
                      <div className="flex items-center gap-3">
                        <span className="fill-current">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4.64664 2C4.47514 2.00001 4.30576 2.03784 4.15054 2.11078C3.99533 2.18372 3.85811 2.28998 3.74864 2.422L1.36197 5.302C0.910641 5.844 1.29664 6.66667 2.00197 6.66667H14.9966C15.7026 6.66667 16.0886 5.84467 15.6386 5.30133L13.2513 2.422C13.1418 2.28998 13.0046 2.18372 12.8494 2.11078C12.6942 2.03784 12.5248 2.00001 12.3533 2H4.64664ZM2.49997 7.66667V12.5C2.49997 12.942 2.67557 13.366 2.98813 13.6785C3.30069 13.9911 3.72461 14.1667 4.16664 14.1667H12.8333C13.2753 14.1667 13.6993 13.9911 14.0118 13.6785C14.3244 13.366 14.5 12.942 14.5 12.5V7.66667H2.49997ZM6.49997 10.1667C6.49997 10.3877 6.41218 10.5996 6.2559 10.7559C6.09962 10.9122 5.88765 11 5.66664 11C5.44563 11 5.23367 10.9122 5.07739 10.7559C4.92111 10.5996 4.83331 10.3877 4.83331 10.1667C4.83331 9.94565 4.92111 9.73369 5.07739 9.57741C5.23367 9.42113 5.44563 9.33333 5.66664 9.33333C5.88765 9.33333 6.09962 9.42113 6.2559 9.57741C6.41218 9.73369 6.49997 9.94565 6.49997 10.1667ZM8.49997 11C8.27896 11 8.067 10.9122 7.91072 10.7559C7.75444 10.5996 7.66664 10.3877 7.66664 10.1667C7.66664 9.94565 7.75444 9.73369 7.91072 9.57741C8.067 9.42113 8.27896 9.33333 8.49997 9.33333C8.72099 9.33333 8.93295 9.42113 9.08923 9.57741C9.24551 9.73369 9.33331 9.94565 9.33331 10.1667C9.33331 10.3877 9.24551 10.5996 9.08923 10.7559C8.93295 10.9122 8.72099 11 8.49997 11ZM12.1666 10.1667C12.1666 10.3877 12.0788 10.5996 11.9226 10.7559C11.7663 10.9122 11.5543 11 11.3333 11C11.1123 11 10.9003 10.9122 10.7441 10.7559C10.5878 10.5996 10.5 10.3877 10.5 10.1667C10.5 9.94565 10.5878 9.73369 10.7441 9.57741C10.9003 9.42113 11.1123 9.33333 11.3333 9.33333C11.5543 9.33333 11.7663 9.42113 11.9226 9.57741C12.0788 9.73369 12.1666 9.94565 12.1666 10.1667Z" />
                          </svg>
                        </span>
                        Retailing
                      </div>
                    ),
                    value: "retailing",
                  },
                  {
                    label: (
                      <div className="flex items-center gap-3">
                        <span className="fill-current">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.5 12.6667C14.6699 12.6669 14.8334 12.732 14.9569 12.8486C15.0805 12.9653 15.1548 13.1247 15.1648 13.2943C15.1747 13.464 15.1196 13.631 15.0105 13.7613C14.9014 13.8916 14.7467 13.9753 14.578 13.9954L14.5 14.0001H2.5C2.33008 13.9999 2.16665 13.9348 2.04309 13.8182C1.91953 13.7015 1.84518 13.5421 1.83522 13.3725C1.82526 13.2029 1.88045 13.0358 1.98951 12.9055C2.09857 12.7752 2.25327 12.6915 2.422 12.6714L2.5 12.6667H14.5ZM13.1667 2.66675C13.5031 2.66664 13.827 2.79369 14.0737 3.02241C14.3204 3.25114 14.4714 3.56464 14.4967 3.90008L14.5 4.00008V10.6667C14.5001 11.0031 14.3731 11.3271 14.1443 11.5738C13.9156 11.8204 13.6021 11.9715 13.2667 11.9967L13.1667 12.0001H3.83334C3.49695 12.0002 3.17296 11.8731 2.92631 11.6444C2.67965 11.4157 2.52857 11.1022 2.50334 10.7667L2.5 10.6667V4.00008C2.4999 3.6637 2.62694 3.3397 2.85567 3.09305C3.0844 2.8464 3.3979 2.69531 3.73334 2.67008L3.83334 2.66675H13.1667Z" />
                          </svg>
                        </span>
                        Tech & Electronics
                      </div>
                    ),
                    value: "tech",
                  },
                  {
                    label: (
                      <div className="flex items-center gap-3">
                        <span className="fill-current">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.8333 2.66675C12.5707 2.66675 13.1367 3.22875 13.556 3.83341L13.698 4.04741L13.828 4.26075C13.8693 4.33053 13.9089 4.39897 13.9467 4.46608C14.4713 5.40408 14.928 6.62875 15.23 7.83875C15.53 9.03942 15.696 10.2934 15.59 11.2794C15.4833 12.2694 14.9733 13.3334 13.8333 13.3334C12.8107 13.3334 12.0047 12.7867 11.35 12.2527L10.61 11.6321C9.99467 11.1281 9.32133 10.6667 8.5 10.6667C7.67867 10.6667 7.00467 11.1281 6.39067 11.6321L5.65067 12.2521C4.99467 12.7867 4.18867 13.3334 3.16667 13.3334C2.026 13.3334 1.516 12.2694 1.41 11.2794C1.30467 10.2927 1.47 9.03942 1.77 7.83875C2.072 6.62875 2.52867 5.40408 3.05333 4.46608L3.172 4.26008L3.302 4.04741L3.444 3.83341C3.86333 3.22875 4.42933 2.66675 5.16667 2.66675C5.50667 2.66675 5.84467 2.74941 6.17667 2.84675L6.572 2.96808C6.63733 2.98808 6.70222 3.00719 6.76667 3.02541C7.34333 3.19075 7.93333 3.33341 8.5 3.33341C9.06667 3.33341 9.65667 3.19075 10.2333 3.02541L10.8233 2.84741C11.1553 2.74941 11.4933 2.66675 11.8333 2.66675ZM6.16667 5.33341C5.72464 5.33341 5.30072 5.50901 4.98816 5.82157C4.6756 6.13413 4.5 6.55805 4.5 7.00008C4.5 7.44211 4.6756 7.86603 4.98816 8.17859C5.30072 8.49115 5.72464 8.66675 6.16667 8.66675C6.6087 8.66675 7.03262 8.49115 7.34518 8.17859C7.65774 7.86603 7.83333 7.44211 7.83333 7.00008C7.83333 6.55805 7.65774 6.13413 7.34518 5.82157C7.03262 5.50901 6.6087 5.33341 6.16667 5.33341ZM10.8333 5.33341C10.6565 5.33341 10.487 5.40365 10.3619 5.52868C10.2369 5.6537 10.1667 5.82327 10.1667 6.00008V6.33341H9.83333C9.65652 6.33341 9.48695 6.40365 9.36193 6.52868C9.23691 6.6537 9.16667 6.82327 9.16667 7.00008C9.16667 7.17689 9.23691 7.34646 9.36193 7.47149C9.48695 7.59651 9.65652 7.66675 9.83333 7.66675H10.1667V8.00008C10.1667 8.17689 10.2369 8.34646 10.3619 8.47149C10.487 8.59651 10.6565 8.66675 10.8333 8.66675C11.0101 8.66675 11.1797 8.59651 11.3047 8.47149C11.4298 8.34646 11.5 8.17689 11.5 8.00008V7.66675H11.8333C12.0101 7.66675 12.1797 7.59651 12.3047 7.47149C12.4298 7.34646 12.5 7.17689 12.5 7.00008C12.5 6.82327 12.4298 6.6537 12.3047 6.52868C12.1797 6.40365 12.0101 6.33341 11.8333 6.33341H11.5V6.00008C11.5 5.82327 11.4298 5.6537 11.3047 5.52868C11.1797 5.40365 11.0101 5.33341 10.8333 5.33341ZM6.16667 6.66675C6.25507 6.66675 6.33986 6.70187 6.40237 6.76438C6.46488 6.82689 6.5 6.91168 6.5 7.00008C6.5 7.08849 6.46488 7.17327 6.40237 7.23578C6.33986 7.2983 6.25507 7.33342 6.16667 7.33342C6.07826 7.33342 5.99348 7.2983 5.93097 7.23578C5.86845 7.17327 5.83333 7.08849 5.83333 7.00008C5.83333 6.91168 5.86845 6.82689 5.93097 6.76438C5.99348 6.70187 6.07826 6.66675 6.16667 6.66675Z" />
                          </svg>
                        </span>
                        Gaming & Entertainment
                      </div>
                    ),
                    value: "gaming",
                  },
                  {
                    label: (
                      <div className="flex items-center gap-3">
                        <span className="fill-current">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.26 2H6.5V2.473C6.505 2.483 6.526 2.532 6.602 2.62C6.705 2.74 6.867 2.883 7.075 3.02C7.497 3.297 8.027 3.5 8.5 3.5C8.973 3.5 9.504 3.297 9.925 3.02C10.133 2.883 10.295 2.74 10.399 2.62C10.474 2.532 10.495 2.483 10.5 2.473V2H12.74L15.052 4.89L13.815 9.217L12 8.309V14H5V8.309L3.185 9.217L1.948 4.889L4.26 2Z"
                            />
                          </svg>
                        </span>
                        Fashion & Beauty
                      </div>
                    ),
                    value: "fashion",
                  },
                  {
                    label: (
                      <div className="flex items-center gap-3">
                        <span className="fill-current">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.89999 8.8933L7.78666 7.00664L3.65999 2.88664C3.33999 2.56664 2.78666 2.6533 2.58666 3.06664C2.11332 4.05997 2.28666 5.27997 3.10666 6.10664L5.89999 8.8933ZM10.42 7.68664C11.44 8.15997 12.8733 7.82664 13.9333 6.76664C15.2067 5.4933 15.4533 3.66664 14.4733 2.68664C13.5 1.7133 11.6733 1.95331 10.3933 3.22664C9.33332 4.28664 8.99999 5.71997 9.47332 6.73997L3.43999 12.7733C3.31534 12.898 3.24531 13.067 3.24531 13.2433C3.24531 13.4196 3.31534 13.5887 3.43999 13.7133C3.56464 13.838 3.73371 13.908 3.90999 13.908C4.08628 13.908 4.25534 13.838 4.37999 13.7133L8.49999 9.60664L12.62 13.7266C12.6817 13.7884 12.755 13.8373 12.8356 13.8707C12.9163 13.9041 13.0027 13.9213 13.09 13.9213C13.1773 13.9213 13.2637 13.9041 13.3444 13.8707C13.425 13.8373 13.4983 13.7884 13.56 13.7266C13.6217 13.6649 13.6707 13.5916 13.7041 13.511C13.7375 13.4304 13.7547 13.3439 13.7547 13.2566C13.7547 13.1694 13.7375 13.0829 13.7041 13.0023C13.6707 12.9216 13.6217 12.8484 13.56 12.7866L9.43999 8.66664L10.42 7.68664Z" />
                          </svg>
                        </span>
                        Food & Dining
                      </div>
                    ),
                    value: "food",
                  },
                ]}
              />
            </div>
            <div className="flex md:hidden w-full justify-end">
              <Button type="link" onClick={showDrawer}>
                Show Filters
              </Button>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
              <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
                <div className="flex items-center  justify-between gap-2 w-full">
                  <p className="text-2xl xl:text-3xl font-semibold text-textHead">
                    Adidas Gift card
                  </p>
                  <p className="text-textBody lg:text-lg 2xl:text-xl">
                    13 results
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-x-4 2xl:gap-x-5 lg:gap-y-6 2xl:gap-y-8 w-full">
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
              <div className="flex items-center justify-center">
                <Button size="large" type="primary">
                  Load More Deals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        title={"Apply filters"}
        placement={"bottom"}
        onClose={onClose}
        openFilter={openFilter}
        rootClassName="h-4/5"
      >
        <div className="flex flex-col">
          <Collapse
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <span>
                {parse(
                  feather.icons["chevron-down"].toSvg({
                    class: `size-5 transition-all duration-1000 ${
                      isActive ? "-rotate-180" : "rotate-0"
                    }`,
                  })
                )}
              </span>
            )}
            // size="large"
            defaultActiveKey={["1", "2", "3", "4"]}
            bordered={false}
            className="w-full"
            items={[
              {
                key: "1",
                label: <p className="font-medium">Brand</p>,
                children: (
                  <Checkbox.Group
                    options={[
                      { label: "Adidas", value: "adidas" },
                      { label: "Amazon", value: "amazon" },
                      { label: "Apple", value: "apple" },
                      { label: "Best Buy", value: "best buy" },
                      { label: "Ebay", value: "ebay" },
                      { label: "EB Games", value: "eb games" },
                      { label: "Microsoft", value: "microsoft" },
                    ]}
                    className="gap-2 lg:gap-3 flex-col"
                  ></Checkbox.Group>
                ),
              },
              {
                key: "2",
                label: <p className="font-medium">Condition</p>,
                children: (
                  <Checkbox.Group
                    options={[
                      { label: "New", value: "new" },
                      { label: "Lightly Used", value: "lightly used" },
                      { label: "Used", value: "used" },
                      { label: "Not Specified", value: "" },
                    ]}
                    className="gap-2 lg:gap-3 flex-col"
                  />
                ),
              },
              {
                key: "3",
                label: <p className="font-medium">Validity</p>,
                children: (
                  <Checkbox.Group
                    options={[
                      { label: "1 Month", value: "1 month" },
                      { label: "3 Months", value: "1 months" },
                      { label: "6 Months", value: "6 months" },
                      { label: "1 year", value: "12 months" },
                    ]}
                    className="gap-2 lg:gap-3 flex-col"
                  />
                ),
              },
              {
                key: "4",
                label: <p className="font-medium">Price</p>,
                children: (
                  <>
                    <Checkbox.Group
                      options={[
                        { label: "Below $10", value: "0-10" },
                        { label: "$10 - $50", value: "10-50" },
                        { label: "$50 - $100", value: "50-100" },
                      ]}
                      className="gap-2 lg:gap-3 flex-col"
                    />
                    <div className="flex items-center justify-between mt-2 lg:mt-3 gap-1 lg:gap-2">
                      <Input prefix="$" />
                      <p className="text-sm lg:text-base text-textBody">to</p>
                      <Input prefix="$" />
                    </div>
                  </>
                ),
              },
            ]}
          />
          <div className="flex pt-3 lg:pt-4 2xl:pt-5 border-t">
            <Button size="large" type="primary" className="w-full">
              Find Offers
            </Button>
          </div>
        </div>
      </Drawer>
      <Footer />
    </div>
  );
};

export default FindDeals;
