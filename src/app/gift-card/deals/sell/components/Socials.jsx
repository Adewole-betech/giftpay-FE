"use client";

import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useEffect, useState } from "react";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import whatsapp from "@/app/assets/icons/whatsapp.svg";
import telegram from "@/app/assets/icons/telegram.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import mail from "@/app/assets/icons/mail.svg";
import phone from "@/app/assets/icons/phone.svg";
import snapchat from "@/app/assets/icons/snapchat.svg";
import facebook from "@/app/assets/icons/facebook.svg";
import tiktok from "@/app/assets/icons/tiktok.svg";
import twitter from "@/app/assets/icons/twitter.svg";
import Summary from "./SummaryModal";

const Socials = ({ sellDetails, setSellDetails, setStep }) => {
  const [socialsForm] = Form.useForm();
  const [openPreview, setOpenPreview] = useState(false);

  const onFinish = (values) => {
    setSellDetails({ ...sellDetails, ...values });
    setOpenPreview(true);
  };

  useEffect(() => {
    if (sellDetails) {
      socialsForm.setFieldsValue({
        socials: {
          whatsapp: sellDetails?.socials?.whatsapp ?? "",
          telegram: sellDetails?.socials?.telegram ?? "",
          instagram: sellDetails?.socials?.instagram ?? "",
          phone: sellDetails?.socials?.phone ?? "",
          email: sellDetails?.socials?.email ?? "",
          facebook: sellDetails?.socials?.facebook ?? "",
          tiktok: sellDetails?.socials?.tiktok ?? "",
          twitter: sellDetails?.socials?.twitter ?? "",
          snapchat: sellDetails?.socials?.snapchat ?? "",
        },
      });
    }
  }, [sellDetails]);

  return (
    <>
      <p className="text-textBody text-sm lg:text-base">
        Buyers needs these details to find your item.
      </p>
      <Form
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
        form={socialsForm}
        name="socials"
      >
        <Form.Item
          label="Whatsapp"
          name={["socials", "whatsapp"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "regexp" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your whatsapp number"
            prefix={<img src={whatsapp?.src} alt="Whatsapp" />}
          />
        </Form.Item>
        <Form.Item
          label="Telegram"
          name={["socials", "telegram"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "regexp" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your telegram number"
            prefix={<img src={telegram?.src} alt="Telegram" />}
          />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name={["socials", "phone"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "regexp" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your phone number"
            prefix={<img src={phone?.src} alt="Phone number" />}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name={["socials", "email"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "email" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your email address"
            prefix={<img src={mail?.src} alt="Email" />}
          />
        </Form.Item>
        <Form.Item
          label="Instagram"
          name={["socials", "instagram"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "url" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your instagram link"
            prefix={<img src={instagram?.src} alt="Instagram" />}
          />
        </Form.Item>
        <Form.Item
          label="Facebook"
          name={["socials", "facebook"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "url" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your facebook link"
            prefix={<img src={facebook?.src} alt="Facebook" />}
          />
        </Form.Item>
        <Form.Item
          label="TikTok"
          name={["socials", "tiktok"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "url" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your tiktok link"
            prefix={<img src={tiktok?.src} alt="TikTok" />}
          />
        </Form.Item>
        <Form.Item
          label="Twitter"
          name={["socials", "twitter"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "url" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your twitter link"
            prefix={<img src={twitter?.src} alt="Twitter" />}
          />
        </Form.Item>
        <Form.Item
          label="Snapchat"
          name={["socials", "snapchat"]}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { type: "url" },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Add your snapchat link"
            prefix={<img src={snapchat?.src} alt="Snapchat" />}
          />
        </Form.Item>
        <Form.Item>
          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <Button
              size="large"
              onClick={() => {
                setSellDetails({
                  ...sellDetails,
                  ...socialsForm.getFieldsValue(),
                });
                setStep(2);
              }}
            >
              {parse(feather.icons["chevron-left"].toSvg({ class: "" }))} Back
            </Button>
            <Button type="primary" htmlType="submit" size="large">
              Preview Details{" "}
              {parse(feather.icons["chevron-right"].toSvg({ class: "" }))}
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Summary
        open={openPreview}
        setOpen={setOpenPreview}
        summary={sellDetails}
      />
    </>
  );
};

export default Socials;
