// import React from "react";
// import { Button, Card, Form, Input, message, Flex } from "antd";
// import TopNavigation from "../../../components/TopNavigation";
// import { createSwitch } from "./functions/create.function";

// const SwitchCreationPage: React.FC = () => {
//   const [form] = Form.useForm();

//   return (
//     <>
//       <TopNavigation />
//       <Flex justify="center" align="center" style={{ marginTop: "10rem" }}>
//         <Card
//           title={
//             <Flex align="center" justify="center">
//               <img
//                 src="/douranLogo.png" // Update this with your logo path
//                 alt="Logo"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   marginRight: "10px",
//                 }}
//               />
//               <span style={{ fontSize: "30px", fontWeight: "bold" }}>
//                 تعریف سوییچ جدید
//               </span>
//             </Flex>
//           }
//           bordered={false}
//           style={{
//             width: 500,
//             borderRadius: "10px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <Form
//             form={form}
//             name="switchCreation"
//             size="large"
//             style={{ maxWidth: 500, width: "100%" }}
//             onFinish={async (values) => {
//               const response = await createSwitch(values);

//               if (response.result) {
//                 message.success(response.message);
//                 form.resetFields();
//               } else {
//                 message.error(response.message);
//                 form.resetFields();
//               }
//             }}
//           >
//             {/* <Form.Item
//               label="نام"
//               name="name"
//               wrapperCol={{ offset: 0, span: 24 }}
//               rules={[{ required: true, message: "نام سوییچ را وارد کنید" }]}
//             >
//               <Input size="large" />
//             </Form.Item> */}

//             <Form.Item
//               label="آی‌پی"
//               name="ip"
//               wrapperCol={{ offset: 2, span: 22 }}
//               rules={[
//                 { required: true, message: "آدرس آی‌پی سوییچ را وارد کنید" },
//               ]}
//             >
//               <Input size="large" />
//             </Form.Item>
//             {/*
//             <Form.Item
//               label="مدل"
//               name="model"
//               wrapperCol={{ offset: 0, span: 24 }}
//               rules={[{ required: true, message: "مدل سوییچ را وارد کنید" }]}
//             >
//               <Input size="large" />
//             </Form.Item> */}
//             {/*
//             <Form.Item
//               label="سری"
//               name="series"
//               wrapperCol={{ offset: 0, span: 24 }}
//               rules={[{ required: true, message: "سری سوییچ را وارد کنید" }]}
//             >
//               <Input size="large" />
//             </Form.Item> */}

//             <Form.Item
//               label="نام کاربری"
//               name="username"
//               wrapperCol={{ offset: 1, span: 23 }}
//               rules={[
//                 {
//                   required: true,
//                   message: "نام کاربری جهت اتصال به سوییچ را وارد کنید",
//                 },
//               ]}
//             >
//               <Input size="large" />
//             </Form.Item>

//             <Form.Item
//               label="گذرواژه"
//               name="password"
//               wrapperCol={{ offset: 1, span: 23 }}
//               rules={[
//                 {
//                   required: true,
//                   message: "گذرواژه جهت اتصال به سوییچ را وارد کنید",
//                 },
//               ]}
//             >
//               <Input type="password" size="large" />
//             </Form.Item>
//             {/*
//             <Form.Item
//               label="تعداد پورت"
//               name="portCount"
//               wrapperCol={{ offset: 0, span: 24 }}
//               rules={[{ required: false }]}
//             >
//               <InputNumber
//                 min={1}
//                 style={{ width: "100%" }}
//                 placeholder="تعداد پورت سوییچ"
//               />
//             </Form.Item> */}

//             <div style={{ marginBottom: "2rem" }}></div>

//             <Form.Item style={{ textAlign: "center" }}>
//               <Button
//                 size="large"
//                 type="primary"
//                 htmlType="submit"
//                 style={{ width: "30%", backgroundColor: "#FE7E03" }}
//               >
//                 ثبت سوییچ
//               </Button>
//             </Form.Item>
//           </Form>
//         </Card>
//       </Flex>
//     </>
//   );
// };

// export default SwitchCreationPage;
