"use client";

import { Collapse } from "antd";
import Header from "../components/header";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import Footer from "../components/footer";

const Faqs = () => {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto overflow-x-clip relative w-full">
      <Header />
      <div className="flex flex-col items-center w-full max-w-[1440px] py-8 md:py-12 lg:py-16 2xl:py-24 gap-6 lg:gap-12 2xl:gap-16 px-8 md:px-12 lg:px-20 2xl:px-28 mt-6">
        <div className="flex flex-col items-center gap-3 lg:gap-4 2xl:gap-5 text-center w-full">
          <p className="font-semibold text-2xl md:text-3xl 2xl:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="text-textBody text-lg lg:text-xl lg:leading-[2rem] w-full md:max-w-[95%] lg:max-w-[80%] xl:max-w-[60%]">
            Have questions? We're here to help! Below, you'll find answers to
            common questions about listing and purchasing gift cards, payments,
            and how to communicate with other users on our platform.
          </p>
        </div>
        <Collapse
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <span>
              {parse(
                feather.icons["chevron-down"].toSvg({
                  class: `size-5 transition-all duration-1000 text-primary ${
                    isActive ? "-rotate-180" : "rotate-0"
                  }`,
                })
              )}
            </span>
          )}
          size="large"
          bordered={false}
          className="w-full md:max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%]"
          items={[
            {
              key: "1",
              label: <p className="font-medium">How do I sell my gift card?</p>,
              children:
                "Click “Sell a Gift Card,” then add the card's type, value, condition, and your price. Upload an image if desired, set a payment link, and submit.",
            },
            {
              key: "2",
              label: <p className="font-medium">How do payments work?</p>,
              children:
                "Herauf trüben träne nennt nicht jenem verschwand. Schauer folgt irrt tönen erste jenem. Lied umwittert fühlt vor besitze gezeigt walten.",
            },
            {
              key: "3",
              label: <p className="font-medium">Can I negotiate prices?</p>,
              children:
                "Herauf trüben träne nennt nicht jenem verschwand. Schauer folgt irrt tönen erste jenem. Lied umwittert fühlt vor besitze gezeigt walten.",
            },
            {
              key: "4",
              label: (
                <p className="font-medium">
                  What gift card types are supported?
                </p>
              ),
              children:
                "Noch tönen gut und dunst tränen die ihr nicht geisterreich. Seelen ihr hinweggeschwunden ihr noch trüben gleich lebt und. Der geneigt vom hören und sie,.",
            },
            {
              key: "5",
              label: (
                <p className="font-medium">
                  How can I list multiple gift cards?
                </p>
              ),
              children:
                "Sanftes feuchten wilde dich was sanftes, und muß du mund ja. Weißt dich bäume bist beiden großer gefärbt der helle, wiedersehn deiner.",
            },
            {
              key: "6",
              label: <p className="font-medium">What if I need assistance?</p>,
              children:
                "Brust mich geschaut schon schon deinen blieb was. Mut die gar ward die und nicht niedlich, du nicht deinen weiter.",
            },
          ]}
        />
        <div className="bg-[#f5f8ff] rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-1.5 lg:gap-2 items-center text-center w-full">
          <p className="font-medium text-lg lg:text-xl lg:leading-[2rem] w-full text-textHead">
            Still have questions?
          </p>
          <p className="text-textBody lg:text-lg lg:leading-[2rem] w-full">
            Can’t find the answer you're looking for? Contact us via{" "}
            <a className="text-primary" href="mailto:hello@ugifty.ng">
              hello@ugifty.ng
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
