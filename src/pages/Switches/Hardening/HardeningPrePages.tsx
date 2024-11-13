import { Button, Flex, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES_ENUM } from "../../../shared/enums/routes.enum";
import { useEffect, useState } from "react";
import apiClient from "../../../configs/axios.config";
import { BACKEND_ROUTES } from "../../../shared/enums/backend.routes.enum";
import { AxiosResponse } from "axios";

const HardeningPrePage = () => {
  const { switchId } = useParams();
  const navigator = useNavigate();
  const [testAgain, useTestAgain] = useState<boolean>(false)
  useEffect(() => {
    // apiClient.get(BACKEND_ROUTES.SWITCHES_HARDENING.replace(":switchId", switchId as string)).then((data:AxiosResponse<>))
  },[testAgain])
  const checkAgainHardening = () => {
    apiClient.get(BACKEND_ROUTES.SWITCHES_HARDENING.replace(':switchId', switchId as string))
              .then((data:AxiosResponse<any>) => message.success('تست ها با موفقیت اجرا شد')).catch((e:any) => message.error('اجرای تست ها با خطا مواجه شد'))
  }
  return (
    <>
      <Flex vertical align="center" style={{ width: "100%" }}>
        <Button
          type="primary"
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginTop: "250px",
            width: "20%",
            height: "50px",
          }}
          onClick={() =>
            navigator(
              ROUTES_ENUM.SWITCHES_DETAIL_HARDENING.replace(
                ":switchId",
                String(switchId)
              )
            )
          }
        >
          نمایش جزییات تست ها
        </Button>
        <Button
          type="primary"
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginTop: "20px",
            width: "20%",
            height: "50px",
          }}
          onClick={() =>
            navigator(
              ROUTES_ENUM.SWITCHES_CHARTS_HARDENING.replace(
                ":switchId",
                String(switchId)
              )
            )
          }
        >
          آنالیز نموداری
        </Button>
        <Button
          type="primary"
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginTop: "20px",
            width: "20%",
            height: "50px",
          }}
          onClick={() =>
            navigator(
              ROUTES_ENUM.SWITCHES_REPORT_HARDENING.replace(
                ":switchId",
                String(switchId)
              )
            )
          }
        >
          گزارش گیری{" "}
        </Button>
        <Button
          type="primary"
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginTop: "20px",
            width: "20%",
            height: "50px",
          }}
          onClick={checkAgainHardening}
        >
           تست مجدد
        </Button>
      </Flex>
    </>
  );
};

export default HardeningPrePage;
