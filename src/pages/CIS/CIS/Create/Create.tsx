import React from "react";
import { Button, Card, Form, Input, message, Flex } from "antd";
import TopNavigation from "../../../../components/TopNavigation";
import { createCIS } from "./functions/create.function";

const CISCreationPage: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <>
      <TopNavigation />
      <Flex justify="center" align="center" style={{ marginTop: "10rem" }}>
        <Card
          title={
            <Flex align="center" justify="center">
              <img
                src="/douranLogo.png" // Update this with your logo path
                alt="Logo"
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                تعریف سی آی اس جدید
              </span>
            </Flex>
          }
          bordered={false}
          style={{
            width: 500,
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form
            form={form}
            name="CisCreationForm"
            size="large"
            style={{ maxWidth: 500, width: "100%" }}
            onFinish={async (values) => {
              const response = await createCIS(values);

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
              label="نام"
              name="name"
              wrapperCol={{ offset: 2, span: 22 }}
              rules={[{ required: true, message: "نام سی آی اس را وارد کنید" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="ورژن"
              name="version"
              wrapperCol={{ offset: 1, span: 23 }}
              rules={[
                {
                  required: true,
                  message: "ورژن سی آی اس وارد کنید",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <div style={{ marginBottom: "2rem" }}></div>

            <Form.Item style={{ textAlign: "center" }}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                style={{ width: "30%", backgroundColor: "#FE7E03" }}
              >
                ثبت سی آی اس{" "}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default CISCreationPage;
