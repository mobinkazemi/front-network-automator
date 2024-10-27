import { Button, Flex } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES_ENUM } from "../../../shared/enums/routes.enum";

const HardeningPrePage = () => {
  const { switchId } = useParams();
  const navigator = useNavigate();
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
      </Flex>
    </>
  );
};

export default HardeningPrePage;
