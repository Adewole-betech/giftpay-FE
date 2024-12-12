import localFont from "next/font/local";
import "./globals.css";
import "feather-icons/dist/feather";
import AllProvider from "./layoutComponents/LayoutContainer";
import { NavigationProvider } from "./layoutComponents/contexts/contexts";
import hljs from "highlight.js";

const graphik = localFont({
  src: [
    {
      path: "./fonts/graphik/GraphikThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikExtralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikSemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikBlack.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikBlackItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/graphik/GraphikSuper.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikSuperItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-graphik",
});

export const metadata = {
  title: "Gift Pay",
  description: "Buy and Sell your Gift Cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
          rel="stylesheet"
        />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
      </head>
      <body
        className={`${graphik.variable} antialiased font-graphik`}
        suppressHydrationWarning={true}
      >
        <AllProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </AllProvider>
      </body>
    </html>
  );
}
