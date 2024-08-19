import React from "react";
import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import axios from "axios";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const App: React.FC = () => {
  return (
    <>
      <TopNavigation></TopNavigation>
      <Form
        size="large"
        // {...formItemLayout}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        variant="filled"
        style={{
          maxWidth: 600,
          marginTop: 50,
          //   border: "2px solid lightgray",
          //   borderRadius: "10px",
          //   paddingLeft: "60px",
          //   paddingRight: "60px",
          //   paddingTop: "30px",
          //   paddingBottom: "30px",
        }}
        onFinish={async (values) => {
          const result = await axios.post(
            "http://localhost:8080/switches/create",
            {
              ip: values.ip,
              model: values.model,
              name: values.name,
              password: values.password,
              portCount: values.portCount,
              series: values.series,
              username: values.username,
            }
          );

          console.log(result);
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
