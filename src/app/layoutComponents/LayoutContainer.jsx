"use client";

import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store/store.js";
import { axiosAuth, createAuthInterceptor } from "../redux/api/axios.js";
import { PersistGate } from "redux-persist/integration/react";

export default function AllProvider({ children }) {
  createAuthInterceptor(axiosAuth, store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#155eef",
              colorInfo: "#155eef",
              colorTextBase: "#101828",
              fontFamily: "var(--font-graphik)",
            },
            components: {
              Timeline: {
                tailColor: "rgb(0,78,235)",
                tailWidth: 4,
              },
              Input: {
                colorBorder: "rgb(208,213,221)",
                colorError: "rgb(252, 165, 165)",
                colorText: "rgb(17, 24, 39)",
                colorTextDisabled: "rgb(209, 213, 219)",
                colorTextPlaceholder: "rgb(102,112,133)",
                colorIcon: "rgb(107, 114, 128)",
                activeShadow: "0px 0px 0px 4px #EFF4FF",
                errorActiveShadow: "0px 0px 0px 4px #FEE2E2",
                paddingBlock: 10,
                paddingInline: 12,
                colorIconHover: "rgb(21,94,239)",
                activeBorderColor: "rgb(21,94,239)",
                hoverBorderColor: "rgb(21,94,239)",
                fontFamily: "var(--font-graphik)",
              },
              InputNumber: {
                paddingBlock: 10,
                paddingInline: 12,
                handleVisible: false,
                fontSize: 16,
                colorBorder: "rgb(209, 213, 219)",
                colorError: "rgb(252, 165, 165)",
                colorText: "rgb(17, 24, 39)",
                colorTextDisabled: "rgb(209, 213, 219)",
                colorTextPlaceholder: "rgb(156, 163, 175)",
                colorIcon: "rgb(107, 114, 128)",
                activeShadow: "0px 0px 0px 4px #EFF4FF",
                errorActiveShadow: "0px 0px 0px 4px #FEE2E2",
                fontFamily: "var(--font-graphik)",
              },
              Select: {
                optionSelectedBg: "rgb(239,244,255)",
                optionSelectedColor: "rgb(17, 24, 39)",
                optionPadding: "10px 16px",
                optionSelectedFontWeight: 500,
                colorText: "rgb(17, 24, 39)",
                colorTextPlaceholder: "rgb(156, 163, 175)",
                colorIcon: "rgb(107, 114, 128)",
                activeShadow: "0px 0px 0px 4px #EFF4FF",
                errorActiveShadow: "0px 0px 0px 4px #FEE2E2",
                paddingBlock: 10,
                paddingInline: 12,
                colorTextDisabled: "rgb(209, 213, 219)",
                colorBorder: "rgb(209, 213, 219)",
                colorError: "rgb(252, 165, 165)",
                fontFamily: "var(--font-graphik)",
              },
              DatePicker: {
                cellRangeBorderColor: "rgb(245, 245, 255)",
                cellActiveWithRangeBg: "rgb(245, 245, 255)",
                cellHeight: 36,
                controlItemBgActive: "rgb(245, 245, 255)",
              },
              Avatar: {
                colorTextPlaceholder: "rgb(245, 245, 255)",
                colorTextLightSolid: "rgb(75, 78, 252)",
              },
              Badge: {
                statusSize: 10,
                dotSize: 10,
              },
              Button: {
                paddingInline: 20,
                controlHeight: 40,
                colorPrimaryHover: "rgb(6,76,217)",
                colorPrimaryBgHover: "rgb(6,76,217)",
                colorPrimaryTextHover: "rgb(6,76,217)",
                colorLinkHover: "rgb(6,76,217)",
                fontWeight: 500,
              },
              Table: {
                headerBg: "rgb(249, 250, 251)",
                headerColor: "rgb(55, 65, 81)",
                borderColor: "rgb(229, 231, 235)",
                colorText: "rgb(17, 24, 39)",
              },
              Typography: {
                fontFamilyCode: "var(--font-graphik)",
              },
              Divider: {
                colorSplit: "rgb(208,213,221)",
              },
              Steps: {
                lineWidth: 4,
                iconTop: -4.5,
                colorTextDescription: "rgb(102,112,133)",
                colorText: "rgb(16,24,40)",
                colorSplit: "rgb(242,244,247)",
                colorPrimaryBorder: "rgb(41,112,255)",
                iconFontSize: 18,
                iconSize: 40,
                padding: 0,
                paddingLG: 0,
                paddingSM: 0,
                paddingXS: 0,
                paddingXXS: 0,
                fontFamily: "var(--font-graphik)",
                fontWeightStrong: 500,
              },
              Checkbox: {
                colorPrimary: "rgb(239,244,255)",
                colorWhite: "rgb(21,94,239)",
                colorPrimaryBorder: "rgb(21,94,239)",
                lineWidth: 1.5,
                colorBorder: "rgb(208,213,221)",
                colorPrimaryHover: "rgb(239,244,255)",
                paddingXS: 12,
                fontFamily: "var(--font-graphik)",
                controlInteractiveSize: 20,
              },
              Segmented: {
                trackBg: "rgb(249,250,251)",
                itemColor: "rgb(102,112,133)",
                itemSelectedColor: "rgb(0,78,235)",
                itemHoverBg: "rgb(239,244,255)",
                itemHoverColor: "rgb(21,94,239)",
                controlHeightLG: 48,
                trackPadding: 4,
              },
              Collapse: {
                contentBg: "rgba(255,255,255,0)",
                headerBg: "rgba(0,0,0,0)",
                colorBorder: "rgb(234,236,240)",
                colorTextHeading: "rgb(16,24,40)",
                colorText: "rgb(102,112,133)",
                contentPadding: "16px 4px 32px 16px!important",
                headerPadding: "16px 16px",
              },
            },
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            // transition: Bounce,
          />
          {children}
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}
