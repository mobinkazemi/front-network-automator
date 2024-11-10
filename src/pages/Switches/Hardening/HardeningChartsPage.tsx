import { Pie } from "@ant-design/plots";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../configs/axios.config";
import { BACKEND_ROUTES } from "../../../shared/enums/backend.routes.enum";
import { Tiny } from "@ant-design/charts";
import { Flex, message } from "antd";
import { IBaseBackendResponse } from "../../../shared/interfaces/base-backend-response.interface";
import { AxiosResponse } from "axios";
import TopNavigation from "../../../components/TopNavigation";
import { Line } from "@ant-design/plots";
import React from "react";
import "../background.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface IResponseDataType {
  id: React.Key;
  checkedAt: Date | string;
  result: boolean;
  version?: number;
  hardening: {
    description: string;
    audit: string;
    title: string;
    recommendations: string;
  };
}
interface IResponseVersionDataType {
  version: number;
  true: number;
  false: number;
  percentage: number;
}
interface IAPIResponse extends IBaseBackendResponse<IResponseDataType[]> {}
interface IAPIResponseVersion
  extends IBaseBackendResponse<IResponseVersionDataType[]> {}

const DemoPie = () => {
  const { switchId } = useParams();
  const [hardeningResults, setHardeningResults] = useState<IResponseDataType[]>(
    []
  );
  const [hardeningVersionResults, setHardeningVersionResults] = useState<
    IResponseVersionDataType[]
  >([]);

  useEffect(() => {
    apiClient
      .get<IAPIResponse>(
        BACKEND_ROUTES.SWITCHES_HARDENING_RESULTS.replace(
          ":id",
          String(switchId)
        )
      )
      .then((data: AxiosResponse<IAPIResponse>) => {
        setHardeningResults(data.data.data!);
      })
      .catch((error) => {
        message.error(error.response.data.detail);
      });

    apiClient
      .get<IAPIResponseVersion>(
        BACKEND_ROUTES.SWITCHES_HARDENING_VERSIONS.replace(
          ":id",
          String(switchId)
        )
      )
      .then((data: AxiosResponse<IAPIResponseVersion>) => {
        console.log(data.data.data);
        setHardeningVersionResults(data.data.data!);
      })
      .catch((error) => {
        message.error(error.response.data.detail);
      });
  }, []);

  if (hardeningResults.length === 0 || hardeningVersionResults.length === 0) {
    return (
      <>
        <Flex align="center" justify="center" gap="middle" vertical>
          <Spin
            style={{ paddingTop: 200 }}
            indicator={<LoadingOutlined style={{ fontSize: 150 }} spin />}
          />
          <span style={{ fontSize: 20, paddingTop: 50 }}>
            در حال دریافت اطلاعات
          </span>
        </Flex>
      </>
    );
  }

  //
  //
  //
  //
  // FOR PIE CHART
  let notSecureCount = 0;
  let secureCount = 0;
  hardeningResults.forEach((result) => {
    if (result.result) {
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
  const progress = (secureCount / (secureCount + notSecureCount)).toFixed(2);

  const progressBarConfig = {
    // width: 880,
    height: 100,
    autoFit: true,
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
  // FOR LINE CHART
  const lineConfig = {
    data: hardeningVersionResults.map((item) => {
      return {
        version: item.version.toString(),
        percentage: item.percentage * 100,
      };
    }),
    xField: "version",
    yField: "percentage",
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  //
  //
  //
  //
  // SHOW RESULTS
  return (
    <div className="SwitchPage">
      <TopNavigation />
      <Flex align="center" justify="center" vertical>
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Ensures the title is above the chart
            alignItems: "flex-end", // Aligns title and chart content to the right
            width: "60%",
            borderRadius: "10px",
            border: "2px solid lightgray",
            backgroundColor: "white",
            padding: "1rem",
            marginTop: "5rem",
            // boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bolder",
              alignSelf: "flex-end", // Aligns text to the right or start of the container
              marginBottom: "30px",
            }}
          >
            میزان امنیت سوییچ
          </span>

          <Tiny.Progress {...progressBarConfig} />
        </div>

        <div style={{ marginBottom: "5rem" }}></div>
      </Flex>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          borderRadius: "5px",
          border: "2px solid gray",
          backgroundColor: "white",
          padding: "1rem",
          margin: "2rem auto", // Center horizontally and add space above/below
        }}
      >
        <Pie {...pieConfig} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          borderRadius: "5px",
          border: "2px solid gray",
          backgroundColor: "white",
          padding: "1rem",
          margin: "2rem auto", // Center horizontally and add space above/below
        }}
      >
        <Line {...lineConfig} />
      </div>
    </div>

    // <div className="SwitchPage">
    //   <TopNavigation></TopNavigation>
    //   <Flex align="center" justify="center" vertical>
    //     <Tiny.Progress {...progressBarConfig} />
    //     <span>میزان امنیت سوییچ </span>
    //     <div style={{ marginBottom: "5rem" }}></div>
    //   </Flex>
    //   <Pie {...pieConfig} />;
    //   <Line {...lineConfig} />
    // </div>
  );
};

export default DemoPie;
