"use client";

import { Button, Form, Input } from "antd";
import Link from "next/link";

const Login = () => {
  const [resetForm] = Form.useForm();
  const onFinish = (values) => {};
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 px-4 xl:px-8 w-full lg:max-w-[80%] 2xl:max-w-[70%]">
        <div className="flex flex-col gap-2 lg:gap-3">
          <p className="font-semibold text-2xl lg:text-3xl">Forgot password</p>
          <p className="text-sm sm:text-base text-textBody">
            Enter email to reset password!
          </p>
        </div>
        <Form
          layout="vertical"
          form={resetForm}
          onFinish={onFinish}
          autoComplete="false"
        >
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
              { type: "email" },
            ]}
          >
            <Input placeholder="Enter your email" className="w-full" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="w-full"
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
        <p className="text-textBody text-center text-sm">
          Already have an account?{" "}
          <Link href={"/auth/login"} className="text-primary font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
