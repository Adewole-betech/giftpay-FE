"use client";

import Header from "./components/header";
import bg from "./assets/images/home/homepageBG.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <div className="flex flex-col w-full max-w-[1440px] h-screen 2xl:h-[70vh] bg-cover bg-no-repeat bg-[url('./assets/images/home/homepageBG.jpeg')]">
        <div className="flex flex-col items-center bg-black/50 w-full h-full">
          <Header />
          <div className="flex flex-col items-center w-full relative pt-4 lg:pt-6 2xl:pt-8">
            <div className="flex flex-col max-w-[1440px] w-full relative px-8 md:px-12 lg:px-20 2xl:px-28">
              <div className="flex-col items-center w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
