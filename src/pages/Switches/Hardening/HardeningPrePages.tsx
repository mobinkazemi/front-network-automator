import { Button, Flex, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES_ENUM } from "../../../shared/enums/routes.enum";
import React, { useEffect } from "react";
import apiClient from "../../../configs/axios.config";
import { BACKEND_ROUTES } from "../../../shared/enums/backend.routes.enum";
import { AxiosResponse } from "axios";
import { IBaseBackendResponse } from "../../../shared/interfaces/base-backend-response.interface";

interface IResponseData {
  result: boolean;
  version: number;
  checkedAt: string;
  hardening: {
    id: number;
    title: string;
    description: string;
    audit: string;
    recommendations: string;
  };
}
interface IReportAPIResponse extends IBaseBackendResponse<IResponseData[]> {}

// Function to convert data to CSV format
const convertToCSV = (data: IResponseData[]) => {
  const headers = ["title", "checkedAt", "result"];
  const rows = data.map((item: any) => [
    item.hardening.title,
    item.checkedAt,
    item.result,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row: any) => row.join(",")),
  ].join("\n");

  return csvContent;
};

// Function to trigger CSV download
const downloadCSV = (csvContent: any) => {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HardeningPrePage = () => {
  const { switchId } = useParams();
  const navigator = useNavigate();
  const [reportData, setReportData] = React.useState<IResponseData[]>([]);

  const handleDownload = () => {
    const csvContent = convertToCSV(reportData);
    downloadCSV(csvContent);
  };

  const url = BACKEND_ROUTES.SWITCHES_HARDENING_RESULTS.replace(
    ":id",
    switchId as string
  );
  console.log({ url, switchId });

  useEffect(() => {
    apiClient
      .get(
        BACKEND_ROUTES.SWITCHES_HARDENING_RESULTS.replace(
          ":id",
          switchId as string
        )
      )
      .then((data: AxiosResponse<IReportAPIResponse>) => {
        setReportData(data.data.data!);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
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
          onClick={
            reportData.length
              ? handleDownload
              : () => message.error("امکان گزارش گیری وجود ندارد", 3)
          }
        >
          گزارش گیری{" "}
        </Button>
      </Flex>
    </>
  );
};

export default HardeningPrePage;
