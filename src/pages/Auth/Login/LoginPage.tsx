import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input, message } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import { loginUser } from "./functions/login-user.function";
import { TOKEN_KEY_ENUM } from "../../../shared/enums/token.enum";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  const response = await loginUser(values);

  if (response.result) {
    localStorage.setItem(TOKEN_KEY_ENUM.ACCESS, response.token as string);
    message.success(response.message);
  } else {
    message.error(response.message);
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage: React.FC = () => (
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
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
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

export default LoginPage;
