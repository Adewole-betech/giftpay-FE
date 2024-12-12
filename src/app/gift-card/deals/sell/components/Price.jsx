"use client";

import { Button, Form, InputNumber } from "antd";
import { useEffect } from "react";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import "highlight.js/styles/github.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CardPrice = ({ sellDetails, setSellDetails, setStep }) => {
  const [priceForm] = Form.useForm();
  const tnc = Form.useWatch("tnc", priceForm);

  const onFinish = (values) => {
    setSellDetails({ ...sellDetails, ...values });
    setStep(3);
  };

  useEffect(() => {
    if (sellDetails) {
      priceForm.setFieldsValue({
        tnc: sellDetails?.tnc ?? "",
        price: sellDetails?.price ?? "",
      });
    }
  }, [sellDetails]);

  return (
    <>
      <p className="text-textBody text-sm lg:text-base">
        Set a price for your gift card.
      </p>
      <Form
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
        form={priceForm}
      >
        <Form.Item
          label="Price of Gift Card"
          name={"price"}
          //   rules={[
          //     { required: true, message: "Please enter gift card face value" },
          //   ]}
        >
          <InputNumber
            prefix="$"
            controls={false}
            className="w-full"
            size="large"
            placeholder=""
          />
        </Form.Item>
        <Form.Item
          label="Trade Terms & Conditions"
          name={"tnc"}
          //   rules={[
          //     {
          //       required: true,
          //       message: "Please enter gift card full description",
          //     },
          //   ]}
        >
          <ReactQuill
            className="font-graphik"
            placeholder="Enter as trade terms and conditions."
            value={tnc}
            defaultValue={""}
            onChange={(val, delta, src) => {
              priceForm.setFieldValue("tnc", val);
            }}
            modules={{
              syntax: true,
              toolbar: [
                ["bold", "italic", "underline", "strike"], // toggled buttons
                ["blockquote", "code-block"],
                ["link", "formula"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }], // superscript/subscript
                [{ indent: "-1" }, { indent: "+1" }],

                [{ color: [] }, { background: [] }],
                [{ align: [] }],

                ["clean"],
              ],
            }}
          />
        </Form.Item>
        <Form.Item>
          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <Button
              size="large"
              onClick={() => {
                setSellDetails({
                  ...sellDetails,
                  ...priceForm.getFieldsValue(),
                });
                setStep(1);
              }}
            >
              {parse(feather.icons["chevron-left"].toSvg({ class: "" }))} Back
            </Button>
            <Button type="primary" htmlType="submit" size="large">
              Next {parse(feather.icons["chevron-right"].toSvg({ class: "" }))}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default CardPrice;
