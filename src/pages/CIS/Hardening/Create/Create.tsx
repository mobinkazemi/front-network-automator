import React from "react";
import { Button, Card, Form, Input, message, Flex } from "antd";
import TopNavigation from "../../../../components/TopNavigation";
import { createHardening } from "./functions/create.function";

const CreateHardeningPage: React.FC = () => {
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
                تعریف هاردنینگ جدید
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
            name="HardeningCreationForm"
            size="large"
            style={{ maxWidth: 500, width: "100%" }}
            onFinish={async (values) => {
              const response = await createHardening(values);

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
              label="عنوان"
              name="title"
              wrapperCol={{ offset: 2, span: 22 }}
              rules={[
                { required: true, message: "عنوان هاردنینگ را وارد کنید" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="توضیحات"
              name="description"
              wrapperCol={{ offset: 2, span: 22 }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="ممیزی"
              name="audit"
              wrapperCol={{ offset: 2, span: 22 }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="دستور"
              name="command"
              wrapperCol={{ offset: 2, span: 22 }}
              rules={[
                { required: true, message: "دستور هاردنینگ را وارد کنید" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="پیشنهادات"
              name="recommendations"
              wrapperCol={{ offset: 2, span: 22 }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="رجکس"
              name="regexPattern"
              wrapperCol={{ offset: 2, span: 22 }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="دسته بندی"
              name="categoryId"
              wrapperCol={{ offset: 2, span: 22 }}
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
                ثبت هاردنینگ{" "}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default CreateHardeningPage;
