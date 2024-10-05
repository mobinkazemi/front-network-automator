import React from "react";
import type { FormProps } from "antd";
import { Button, Flex, Form, Input, message } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import { registerUser } from "./functions/register-user.function";

type FieldType = {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  const response = await registerUser(values);

  if (response.result) {
    console.log(1, response);
    message.success(response.message);
  } else {
    console.log(2, response);
    message.error(response.message);
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegisterPage: React.FC = () => (
  <>
    <TopNavigation></TopNavigation>
    <Flex justify="center">
      <Form
        name="basic"
        labelCol={{}}
        wrapperCol={{}}
        style={{ maxWidth: 500, width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "نام خود را وارد نمایید" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "نام کاربری خود را وارد نمایید" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "گذرواژه خود را وارد نمایید" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "گذرواژه خود را مجددا وارد نمایید" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("گذرواژه و تکرار گذرواژه یکسان نیستند!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  </>
);

export default RegisterPage;
