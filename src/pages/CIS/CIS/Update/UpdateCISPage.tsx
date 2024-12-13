import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, message, Flex } from "antd";
import { useParams } from "react-router-dom";
import { BACKEND_ROUTES, setId } from "../..//../../shared/backendRoutes";
import { IBaseBackendResponse } from "../../../../shared/interfaces/base-backend-response.interface";
import apiClient from "../../../../configs/axios.config";
import { AxiosResponse } from "axios";
import TopNavigation from "../../../../components/TopNavigation";
import { updateCIS } from "./functions/updateCIS.function";

interface ICIS {
  id: number;
  name: string;
  version: string;
}
const { method, url } = BACKEND_ROUTES.cis.info;
const UpdateCISPage: React.FC = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState<Partial<ICIS>>();
  const [form] = Form.useForm();

  useEffect(() => {
    apiClient[method](setId({ id: id as string, url })).then(
      (response: AxiosResponse<IBaseBackendResponse<ICIS>>) => {
        setInitialData(response.data.data);
      }
    );
  }, [id]);

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [initialData]);

  return (
    <>
      <TopNavigation />
      <Flex justify="center" align="center" style={{ marginTop: "9rem" }}>
        <Card
          title={
            <Flex align="center" justify="center">
              <img
                src="/douranLogo.png"
                alt="Logo"
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                ویرایش سی آی اس
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
            name="updateCISForm"
            size="large"
            style={{ maxWidth: 500, width: "100%" }}
            onFinish={async (values) => {
              const response = await updateCIS({ id, ...values });

              if (response.result) {
                message.success(response.message);
              } else {
                message.error(response.message);
              }
            }}
          >
            <Form.Item
              name={"name"}
              label="نام"
              wrapperCol={{ offset: 4, span: 20 }}
              rules={[{ required: true, message: "نام سی آی اس را وارد کنید" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="ورژن"
              name="version"
              wrapperCol={{ offset: 3, span: 21 }}
              rules={[
                { required: true, message: "ورژن سی آی اس را وارد کنید" },
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
                ویرایش سی آی اس
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default UpdateCISPage;
