import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import SwitchInfoComponent from "./parts/switchInfoComponent";
import { useParams } from "react-router-dom";
import apiClient from "../../../configs/axios.config";
import { ISwitch } from "../../../shared/interfaces/switch.interface";
import { sendSwitchCommand } from "./functions/sendCommand";
const { TextArea } = Input;

const CommandOnSwitchPage: React.FC = () => {
  const { switchId } = useParams();
  const [switchInfo, setSwitchInfo] = useState<ISwitch>();

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

  if (switchInfo) {
    console.dir({ switchInfo });
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

            console.log(result);
            // call a state to show response
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
