import { Pie } from "@ant-design/plots";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../configs/axios.config";
import { BACKEND_ROUTES } from "../../../shared/enums/backend.routes.enum";
import { Tiny } from "@ant-design/charts";
import { Flex } from "antd";

interface IHardeningResults {
  id: number;
  title: string;
  status: boolean;
}
interface IAPIResponse {
  data: IHardeningResults[];
  message: string;
}
const DemoPie = () => {
  const { switchId } = useParams();
  const [hardeningResults, setHardeningResults] = useState<IHardeningResults[]>(
    []
  );

  useEffect(() => {
    apiClient
      .get<IAPIResponse>(
        BACKEND_ROUTES.SWITCHES_HARDENING.replace(":switchId", String(switchId))
      )
      .then((response) => {
        setHardeningResults(response.data.data);
      });
  }, []);

  if (!hardeningResults) {
    return <>لطفا تا دریافت نتایج صبر کنید</>;
  }

  //
  //
  //
  //
  // FOR PIE CHART
  let notSecureCount = 0;
  let secureCount = 0;
  hardeningResults.forEach((result) => {
    if (result.status) {
      secureCount++;
    } else {
      notSecureCount++;
    }
  });

  const pieConfig = {
    data: [
      {
        type: "امن",
        value: secureCount,
      },
      {
        type: "غیر امن",
        value: notSecureCount,
      },
    ],
    angleField: "value",
    colorField: "type",
    label: {
      text: (d: any) => `${d.type}: ${d.value}`,
      position: "spider",
      style: {
        fontSize: 15,
        fontWeight: "bold",
      },
    },
  };

  //
  //
  //
  //
  // FOR PROGRESS BAR
  const progress = (secureCount / (secureCount + notSecureCount)).toFixed(3);
  const progressBarConfig = {
    width: 880,
    height: 60,
    autoFit: false,
    percent: progress,
    color: ["#f23131", "#52c41a"],
    annotations: [
      {
        type: "text",
        style: {
          text: `${(progress as any) * 100}%`,
          x: "50%",
          y: "50%",
          textAlign: "left",
          fontSize: 30,
          fontStyle: "bold",
        },
      },
    ],
  };

  //
  //
  //
  //
  // SHOW RESULTS
  return (
    <>
      <Flex align="center" justify="center" vertical>
        <div style={{ marginBottom: "5rem" }}></div>
        <Tiny.Progress {...progressBarConfig} />
        <span>میزان امنیت سوییچ </span>
        <div style={{ marginBottom: "5rem" }}></div>
      </Flex>
      <Pie {...pieConfig} />;
    </>
  );
};

export default DemoPie;
