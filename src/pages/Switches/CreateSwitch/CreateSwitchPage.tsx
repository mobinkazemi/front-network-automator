import React from "react";
import { Button, Form, Input, InputNumber, message } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import { createSwitch } from "./functions/createSwitch.function";

const App: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <>
      <TopNavigation></TopNavigation>
      <Form
        form={form}
        size="large"
        // {...formItemLayout}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        variant="filled"
        style={{
          maxWidth: 600,
          marginTop: 50,
        }}
        onFinish={async (values) => {
          const response = await createSwitch(values);

          if (response.result) {
            message.success(response.message);
            form.resetFields();
          } else {
            message.error(response.message);
            form.resetFields();
          }
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "نام سوییچ را وارد کنید" }]}
        >
          <Input size="large" />
        </Form.Item>

        {/* *********************************** */}

        <Form.Item
          label="IP"
          name="ip"
          rules={[{ required: true, message: "آدرس آی‌پی سوییچ را وارد کنید" }]}
        >
          <Input size="large" />
        </Form.Item>

        {/* *********************************** */}

        <Form.Item
          label="Model"
          name="model"
          rules={[{ required: true, message: "مدل سوییچ را وارد کنید" }]}
        >
          <Input size="large" />
        </Form.Item>

        {/* *********************************** */}

        <Form.Item
          label="Series"
          name="series"
          rules={[{ required: true, message: "سری سوییچ را وارد کنید" }]}
        >
          <Input size="large" />
        </Form.Item>

        {/* *********************************** */}

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "نام کاربری جهت اتصال به سوییچ را وارد کنید",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        {/* *********************************** */}

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "گذرواژه جهت اتصال به سوییچ را وارد کنید",
            },
          ]}
        >
          <Input type="password" size="large" />
        </Form.Item>

        {/* *********************************** */}

        <Form.Item
          label="Port count"
          name="portCount"
          rules={[
            { required: false, message: "تعداد پورت سوییچ را وارد کنید" },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>

        {/* *********************************** */}

        <Form.Item wrapperCol={{ offset: 12, span: 1 }}>
          <Button size="large" type="primary" htmlType="submit">
            ثبت سوییچ
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
