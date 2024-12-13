"use client";

import { Avatar, Badge, Button, Divider, Rate } from "antd";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";

const MyReviews = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
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
            <p className="text-textBody text-sm lg:text-base">Nov 19, 2024</p>
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-2">
            <p className="text-textHead text-sm lg:text-base font-semibold">
              Very good seller!
            </p>
            <p className="text-textBody text-sm lg:text-base">
              Jugendlich mich sich vom erste der mich bringt wenn geisterreich,
              drängt es herz weiten vom ihr weiten herz, weiten schöne nun
              lebens der erste meinem nennt. Einst es träne erfreuet.
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
            <p className="text-textBody text-sm lg:text-base">Nov 19, 2024</p>
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-2">
            <p className="text-textHead text-sm lg:text-base font-semibold">
              Very good seller!
            </p>
            <p className="text-textBody text-sm lg:text-base">
              Jugendlich mich sich vom erste der mich bringt wenn geisterreich,
              drängt es herz weiten vom ihr weiten herz, weiten schöne nun
              lebens der erste meinem nennt. Einst es träne erfreuet.
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
            <p className="text-textBody text-sm lg:text-base">Nov 19, 2024</p>
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-2">
            <p className="text-textHead text-sm lg:text-base font-semibold">
              Very good seller!
            </p>
            <p className="text-textBody text-sm lg:text-base">
              Jugendlich mich sich vom erste der mich bringt wenn geisterreich,
              drängt es herz weiten vom ihr weiten herz, weiten schöne nun
              lebens der erste meinem nennt. Einst es träne erfreuet.
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
            <p className="text-textBody text-sm lg:text-base">Nov 19, 2024</p>
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-2">
            <p className="text-textHead text-sm lg:text-base font-semibold">
              Very good seller!
            </p>
            <p className="text-textBody text-sm lg:text-base">
              Jugendlich mich sich vom erste der mich bringt wenn geisterreich,
              drängt es herz weiten vom ihr weiten herz, weiten schöne nun
              lebens der erste meinem nennt. Einst es träne erfreuet.
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
    </div>
  );
};

export default MyReviews;
