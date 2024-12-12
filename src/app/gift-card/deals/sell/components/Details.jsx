"use client";

import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import * as feather from "feather-icons/dist/feather";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { runes } from "runes2";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CardDetails = ({ sellDetails, setSellDetails, setStep }) => {
  const [detailsForm] = Form.useForm();
  const brand = Form.useWatch("brand", detailsForm);
  const full_description = Form.useWatch("full_description", detailsForm);

  const onFinish = (values) => {
    setSellDetails({ ...sellDetails, ...values });
    setStep(1);
  };

  useEffect(() => {
    if (sellDetails) {
      detailsForm.setFieldsValue({
        name: sellDetails?.name ?? "",
        short_description: sellDetails?.short_description ?? "",
        full_description: sellDetails?.full_description ?? "",
        brand: sellDetails?.brand ?? "",
        brand_name: sellDetails?.brand_name ?? "",
        value: sellDetails?.value ?? "",
        condition: sellDetails?.condition ?? "",
        expiry_date: sellDetails?.expiry_date
          ? dayjs(sellDetails?.expiry_date)
          : "",
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
        form={detailsForm}
      >
        <Form.Item
          label="Gift Card Name"
          name={"name"}
          //   rules={[
          //     { required: true, message: "Please enter gift card name" },
          //     { max: 150 },
          //   ]}
        >
          <Input
            size="large"
            placeholder="Enter a name"
            count={{
              show: true,
              max: 150,
              strategy: (txt) => runes(txt).length,
              exceedFormatter: (txt, { max }) =>
                runes(txt).slice(0, max).join(""),
            }}
          />
        </Form.Item>
        <Form.Item
          label="Short Description"
          name={"short_description"}
          //   rules={[{ max: 200 }]}
        >
          <Input
            size="large"
            count={{
              show: true,
              max: 200,
              strategy: (txt) => runes(txt).length,
              exceedFormatter: (txt, { max }) =>
                runes(txt).slice(0, max).join(""),
            }}
            placeholder="Describe your gift card in a few words"
          />
        </Form.Item>
        <Form.Item
          label="Brand"
          name={"brand"}
          //   rules={[{ required: true, message: "Please select gift card brand" }]}
        >
          <Select
            size="large"
            placeholder="Select brand"
            options={[
              { label: "Brand", value: "", disabled: true },
              { label: "Apple", value: "apple" },
              { label: "App store", value: "appstore" },
              { label: "Play store", value: "playstore" },
              { label: "Amazon", value: "amazon" },
              { label: "Others", value: "others" },
            ]}
          />
        </Form.Item>
        {brand === "others" && (
          <Form.Item
            label="Brand Name"
            name={"brand_name"}
            // rules={[{ required: true, message: "Please enter brand name" }]}
          >
            <Input size="large" placeholder="Enter a brand name" />
          </Form.Item>
        )}
        <Form.Item
          label="Gift Card Face Value"
          name={"value"}
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
          label="Condition"
          name={"condition"}
          //   rules={[
          //     { required: true, message: "Please select gift card condition" },
          //   ]}
          initialValue={""}
        >
          <Select
            size="large"
            placeholder="Select condition"
            options={[
              { label: "New", value: "new" },
              { label: "Used", value: "used" },
              { label: "Lightly used", value: "lightly used" },
              { label: "Not Specified", value: "" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Validity"
          name={"expiry_date"}
          //   rules={[
          //     { required: true, message: "Please select gift card expiry date" },
          //   ]}
        >
          <DatePicker
            minDate={dayjs()}
            size="large"
            format={"MMM d, YYYY"}
            className="w-full"
          />
        </Form.Item>
        <Form.Item
          label="Full Description"
          name={"full_description"}
          //   rules={[
          //     {
          //       required: true,
          //       message: "Please enter gift card full description",
          //     },
          //   ]}
        >
          <ReactQuill
            className="font-graphik"
            placeholder="Enter as much details as possible to increase sales."
            value={full_description}
            defaultValue={""}
            onChange={(val, delta, src) => {
              detailsForm.setFieldValue("full_description", val);
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
                detailsForm.resetFields();
                setSellDetails({});
              }}
            >
              Cancel
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

export default CardDetails;
