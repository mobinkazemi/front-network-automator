import { Button, Form, Input, InputNumber, message } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import { useEffect, useState } from "react";
import apiClient from "../../../configs/axios.config";
import { useParams } from "react-router-dom";
import { ISwitch } from "../interface";
import { updateSwitch } from "./functions/updateSwitch.function";

const UpdateSwitchPage = () => {
  const { switchId } = useParams();

  const [initialData, setInitialData] = useState<Partial<ISwitch>>();

  const [form] = Form.useForm();

  useEffect(() => {
    apiClient.get(`/switches/info/${switchId}`).then((response) => {
      setInitialData(response.data.data);
    });
  }, []);

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [initialData]);

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
          const response = await updateSwitch({ id: switchId, ...values });

          if (response.result) {
            message.success(response.message);
          } else {
            message.error(response.message);
          }
        }}
      >
        {/* *********************************** */}

        <Form.Item
          name={"name"}
          label={"Name"}
          rules={[{ required: true, message: "نام سوییچ را وارد کنید" }]}
        >
          <Input></Input>
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
            ویرایش سوییچ
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateSwitchPage;
