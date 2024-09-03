import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import SwitchInfoComponent from "./parts/switchInfoComponent";
import { useParams } from "react-router-dom";
import apiClient from "../../../configs/axios.config";
import { ISwitch } from "../../../shared/interfaces/switch.interface";
import { sendSwitchCommand } from "./functions/sendCommand";

const { TextArea } = Input;
const { Paragraph } = Typography;
const messager = (msg: string) => {
  message.error(msg);
  return null;
};
const CommandOnSwitchPage: React.FC = () => {
  const { switchId } = useParams();
  const [switchInfo, setSwitchInfo] = useState<ISwitch>();
  const [commandResult, setCommandResult] = useState("");

  useEffect(() => {
    const fetchSwitchInfo = async () => {
      try {
        const response = await apiClient.get(`/switches/info/${switchId}`);
        setSwitchInfo(response.data.data);
      } catch (err) {
        console.error(err);
        return;
      }
    };

    fetchSwitchInfo();
  }, [switchId]);

  if (switchInfo && commandResult) {
    const thisResult: {
      data: { stdout: string; stderr: string };
      result: boolean;
      message: string;
    } = JSON.parse(commandResult);

    return (
      <>
        <TopNavigation></TopNavigation>
        <SwitchInfoComponent
          name={switchInfo.name}
          ip={switchInfo.ip}
          model={switchInfo.model}
          series={switchInfo.series}
          os={switchInfo.os}
          id={switchInfo.id}
        ></SwitchInfoComponent>

        <Form
          onFinish={async (values) => {
            const result = await sendSwitchCommand({
              command: values.command,
              id: switchInfo.id,
            });

            setCommandResult(JSON.stringify(result));
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form.Item style={{ width: "80%" }} name="command">
            <TextArea
              placeholder=">"
              autoSize={{ minRows: 3, maxRows: 5 }}
              style={{
                backgroundColor: "#B0B0B0",
                color: "black",
                fontSize: "30px",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">
              ارسال دستور{" "}
            </Button>
          </Form.Item>

          {thisResult.result ? (
            <>
              {" "}
              <Paragraph
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    direction: "rtl",
                    fontWeight: "bolder",
                    color: "green",
                  }}
                >
                  خروجی صحیح (STDOUT){" "}
                </label>
                <blockquote
                  style={{
                    width: "90%",
                    height: "5rem",
                    backgroundColor: "lightgreen",
                    borderRadius: "2px",
                    overflow: "auto",
                  }}
                >
                  {thisResult.data.stdout}
                </blockquote>
              </Paragraph>
              <Paragraph
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    direction: "rtl",
                    fontWeight: "bolder",
                    color: "red",
                  }}
                >
                  خروجی ارور (STDERR){" "}
                </label>
                <blockquote
                  style={{
                    width: "90%",
                    height: "5rem",
                    backgroundColor: "#ff9c9c",
                    borderRadius: "2px",
                    overflow: "auto",
                  }}
                >
                  {thisResult.data.stderr}
                </blockquote>
              </Paragraph>
            </>
          ) : (
            messager(thisResult.message)
          )}
        </Form>
      </>
    );
  } else if (switchInfo) {
    return (
      <>
        <TopNavigation></TopNavigation>
        <SwitchInfoComponent
          name={switchInfo.name}
          ip={switchInfo.ip}
          model={switchInfo.model}
          series={switchInfo.series}
          os={switchInfo.os}
          id={switchInfo.id}
        ></SwitchInfoComponent>
        <Form
          onFinish={async (values) => {
            const result = await sendSwitchCommand({
              command: values.command,
              id: switchInfo.id,
            });

            setCommandResult(JSON.stringify(result));
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form.Item style={{ width: "80%" }} name="command">
            <TextArea
              placeholder=">"
              autoSize={{ minRows: 3, maxRows: 5 }}
              style={{
                backgroundColor: "#B0B0B0",
                color: "black",
                fontSize: "30px",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">
              ارسال دستور{" "}
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  } else {
    return (
      <>
        <TopNavigation></TopNavigation>
      </>
    );
  }
};

export default CommandOnSwitchPage;
