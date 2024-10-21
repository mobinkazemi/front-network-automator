import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input, message } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import { loginUser } from "./functions/login-user.function";
import { TOKEN_KEY_ENUM } from "../../../shared/enums/token.enum";
import { useNavigate } from "react-router-dom";
import { ROUTES_ENUM } from "../../../shared/enums/routes.enum";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage: React.FC = () => {
  const navigator = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values: any) => {
    const response = await loginUser(values);

    if (response.result) {
      localStorage.setItem(TOKEN_KEY_ENUM.ACCESS, response.token as string);
      message.success(response.message);
      setTimeout(() => {
        navigator(ROUTES_ENUM.HOME);
        window.location.reload();
      }, 1000);
    } else {
      message.error(response.message);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
};

export default LoginPage;
