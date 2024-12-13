"use client";

import { Button, Divider, Form, Input } from "antd";

const MyPasswords = () => {
  const [passwordForm] = Form.useForm();
  const [pinForm] = Form.useForm();
  return (
    <div className="flex flex-col w-full gap-3 lg:gap-4 2xl:gap-5">
      <Form layout="vertical" autoComplete="off" form={passwordForm}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 2xl:gap-8">
          <div className="flex flex-col gap-0.5 lg:gap-1 col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3">
            <p className="text-xs lg:text-sm font-medium text-[#344054]">
              Passwords
            </p>
            <p className="text-xs lg:text-sm text-textBody">
              Enter your current password to change your password.
            </p>
          </div>
          <div className="col-span-full md:col-span-7 lg:col-span-6 xl:col-span-5 2xl:col-span-6">
            <Form.Item
              name={"current_password"}
              label="Current Password"
              rules={[
                { required: true, message: "Please enter current password" },
              ]}
            >
              <Input.Password className="w-full" size="large" />
            </Form.Item>
            <Form.Item
              name={"new_password"}
              label="New Password"
              rules={[{ required: true, message: "Please enter new password" }]}
            >
              <Input.Password className="w-full" size="large" />
            </Form.Item>
            <Form.Item
              name={"confirm_password"}
              label="Confirm Password"
              rules={[
                { required: true, message: "Please confirm new password" },
              ]}
            >
              <Input.Password className="w-full" size="large" />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <Button size="large" onClick={() => passwordForm.resetFields()}>
              Cancel
            </Button>
            <Button size="large" type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Divider className="m-0" />
      <Form layout="vertical" autoComplete="off" form={pinForm}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 2xl:gap-8">
          <div className="flex flex-col gap-0.5 lg:gap-1 col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3">
            <p className="text-xs lg:text-sm font-medium text-[#344054]">
              Change PIN
            </p>
            <p className="text-xs lg:text-sm text-textBody">
              Enter your current PIN to change your PIN.
            </p>
          </div>
          <div className="col-span-full md:col-span-7 lg:col-span-6 xl:col-span-5 2xl:col-span-6">
            <Form.Item
              name={"current_pin"}
              label="Current PIN"
              rules={[
                { required: true, message: "Please enter current PIN" },
                { min: 5 },
                { max: 5 },
              ]}
            >
              <Input.Password className="w-full" size="large" />
            </Form.Item>
            <Form.Item
              name={"new_pin"}
              label="New PIN"
              rules={[
                { required: true, message: "Please enter new PIN" },
                { min: 5 },
                { max: 5 },
              ]}
            >
              <Input.Password className="w-full" size="large" />
            </Form.Item>
            <Form.Item
              name={"confirm_pin"}
              label="Confirm PIN"
              rules={[
                { required: true, message: "Please confirm new PIN" },
                { min: 5 },
                { max: 5 },
              ]}
            >
              <Input.Password className="w-full" size="large" />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <Button size="large" onClick={() => pinForm.resetFields()}>
              Cancel
            </Button>
            <Button size="large" type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyPasswords;
