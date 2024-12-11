"use client";

import { Button } from "antd";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";

const Listings = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
      <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
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
  );
};

export default Listings;
