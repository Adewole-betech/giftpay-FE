import Image from "next/image";
import logo from "../assets/icons/logo.svg";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-white">
      <div className="flex lg:grid lg:grid-cols-2 max-w-[1440px] w-full h-full">
        <div
          className={`flex flex-col bg-cover bg-no-repeat bg-center bg-[url('./assets/images/home/homepageBG.jpeg')] bg-home h-full w-full`}
        >
          <div className="flex flex-col gap-3 bg-black/50 w-full h-full p-4 lg:p-8 relative justify-center">
            <Link
              href={"/"}
              className="flex items-center gap-3 lg:gap-4 absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8"
            >
              <Image
                alt="Gift pay logo"
                src={logo}
                width={32}
                height={32}
                loading="lazy"
              />
              <p className="font-bold text-xl lg:text-2xl text-white">UGifty</p>
            </Link>
            <div className="flex lg:hidden flex-col md:justify-center bg-white p-4 md:p-6 self-center w-full md:max-w-[70%]">
              {children}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col md:justify-center bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
