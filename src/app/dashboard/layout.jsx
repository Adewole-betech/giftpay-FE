"use client";

import Footer from "../components/footer";
import Header from "../components/header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <Header />
      <div className="flex flex-col items-center w-full max-w-[1440px] py-8 md:py-12 lg:py-16 2xl:py-24 gap-6 lg:gap-12 2xl:gap-16 px-8 md:px-12 lg:px-20 2xl:px-28 mt-6">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
