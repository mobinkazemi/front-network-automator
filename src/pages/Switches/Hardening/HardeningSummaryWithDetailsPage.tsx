import { useEffect, useState } from "react";
import "./summay-page-style.css";
import { IBaseBackendResponse } from "../../../shared/interfaces/base-backend-response.interface";
import { BACKEND_ROUTES, setId } from "../../../shared/backendRoutes";
import apiClient from "../../../configs/axios.config";
import { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";

const getCompliant = (compliant: number) => {
  switch (compliant) {
    case 0:
      return "False";
    case 1:
      return "True";
    case 2:
      return "Not Applicable";

    default:
      return "Not Defined";
  }
};
interface IAPIResponseEachCheckRow {
  title: string;
  level: number;
  compliant: number;
  currentConfig: string;
}
interface IAPIResponseEachPlaneRow_lastLevel {
  category: string;
  checks: IAPIResponseEachCheckRow[];
}
interface IAPIResponseEachPlaneRow_preLastLevel {
  category: string;
  checks: IAPIResponseEachPlaneRow_lastLevel[];
}

type APIResponseEachPlaneRow =
  | IAPIResponseEachPlaneRow_lastLevel
  | IAPIResponseEachPlaneRow_preLastLevel;
interface IAPIResponseData {
  summary: {
    targetDetails: {
      hostName: string;
      iosVersion: string;
      check: string;
    };
    checks: {
      total: number;
      passed: number;
      failed: number;
      notApplicable: number;
    };
    plane: {
      management: { passed: number; failed: number; notApplicable: number };
      control: {
        passed: number;
        failed: number;
        notApplicable: number;
      };
      data: { passed: number; failed: number; notApplicable: number };
    };
  };
  details: {
    managementPlane: APIResponseEachPlaneRow[];
    controlPlane: APIResponseEachPlaneRow[];
    dataPlane: APIResponseEachPlaneRow[];
  };
}

interface IAPIResponse extends IBaseBackendResponse<IAPIResponseData> {}

const { method, url } = BACKEND_ROUTES.switch.hardeningSummaryDetail;
const HardeningSummaryDetailPage: React.FC = () => {
  const { switchId } = useParams<{ switchId: string }>();
  const [response, setResponse] = useState<IAPIResponseData | null>(null);
  useEffect(() => {
    apiClient[method](setId({ id: switchId as string, url }))
      .then((response: AxiosResponse<IAPIResponse>) => {
        console.log(response.data.data);
        setResponse(response.data.data!);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <html>
        <head>
          <title>douran cisco automation project</title>
          <link rel="icon" href="/douranLogo.png" type="image/x-icon" />
        </head>
        <body>
          <div className="header">
            <div>
              <img className="logo" src="/douranLogo.png" />
            </div>
            <div className="title">
              <p>CIS Cisco IOS Benchmark Assessment Report</p>
            </div>
            <div className="bar"></div>
          </div>
          <div className="summary-container">
            <div className="summary-title">
              <div className="summary-font">Report Summary</div>
              <div className="date">
                <p>Report Generated: {new Date().toLocaleString()}</p>
              </div>
            </div>
            <div className="summary-body">
              <div className="target">
                <p id="target-font">Target Details</p>
                <p>HostName: {response?.summary.targetDetails.hostName}</p>
                <p>IOS Version: {response?.summary.targetDetails.iosVersion}</p>
                <p>Check: {response?.summary.targetDetails.check}</p>
              </div>
              <div className="passed">
                <p id="score-font">Passed Checks</p>
                <div className="summary-bar"></div>
                <p>
                  <span id="score-value">
                    {response?.summary.checks.passed}
                  </span>{" "}
                  out of {response?.summary.checks.total} total assessment
                  checks
                </p>
              </div>
              <div className="failed">
                <p id="score-font">Failed Checks</p>
                <div className="summary-bar"></div>
                <p>
                  <span id="score-value">
                    {response?.summary.checks.failed}
                  </span>{" "}
                  out of {response?.summary.checks.total} total assessment
                  checks
                </p>
              </div>
              <div className="na">
                <p id="score-font">Not Applicable</p>
                <div className="summary-bar"></div>
                <p>
                  <span id="score-value">
                    {response?.summary.checks.notApplicable}
                  </span>{" "}
                  checks were not applicable
                </p>
              </div>
            </div>
            <div className="plane">
              <div className="management">
                <p id="plane-font">Management Plane</p>
                <p>
                  <span id="plane-value-passed">
                    {response?.summary.plane.management.passed}
                  </span>{" "}
                  checks passed;{" "}
                  <span id="plane-value-failed">
                    {response?.summary.plane.management.failed}
                  </span>{" "}
                  checks failed;{" "}
                  <span id="plane-value-na">
                    {response?.summary.plane.management.notApplicable}
                  </span>{" "}
                  not applicable checks
                </p>
              </div>
              <div className="control">
                <p id="plane-font">Control Plane</p>
                <p>
                  <span id="plane-value-passed">
                    {response?.summary.plane.control.passed}
                  </span>{" "}
                  checks passed;{" "}
                  <span id="plane-value-failed">
                    {response?.summary.plane.control.failed}
                  </span>{" "}
                  checks failed;{" "}
                  <span id="plane-value-na">
                    {response?.summary.plane.control.notApplicable}
                  </span>{" "}
                  not applicable checks
                </p>
              </div>
              <div className="data">
                <p id="plane-font">Data Plane</p>
                <p>
                  <span id="plane-value-passed">
                    {response?.summary.plane.data.passed}
                  </span>{" "}
                  checks passed;{" "}
                  <span id="plane-value-failed">
                    {response?.summary.plane.data.failed}
                  </span>{" "}
                  checks failed;{" "}
                  <span id="plane-value-na">
                    {response?.summary.plane.data.notApplicable}
                  </span>{" "}
                  not applicable checks
                </p>
              </div>
            </div>
          </div>
          <div className="table-container">
            <div className="table-header">
              <p className="table-header-font">Assessment Breakdown</p>
              <div className="table-bar"></div>
            </div>
            {/*
             *
             *
             * *
             * *
             * *
             * *
             * *
             *  */}{" "}
            <div className="table-section">
              <p id="section-font">Management Plane</p>
            </div>
            <table className="expandable-table">
              <thead className="table-top-font">
                <th>CIS CHECK</th>
                <th>LEVEL</th>
                <th>COMPLIANT</th>
              </thead>
              {/* from hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
              {response?.details.managementPlane.map((item) => {
                return (
                  <>
                    <thead className="table-subsection">
                      <th colSpan={3}>{item.category}</th>
                    </thead>
                    {item.checks.map((el) => {
                      if ((el as IAPIResponseEachPlaneRow_lastLevel).category) {
                        return (
                          <>
                            <thead className="table-subsection">
                              <th colSpan={3}>
                                {
                                  (el as IAPIResponseEachPlaneRow_lastLevel)
                                    .category
                                }
                              </th>
                            </thead>
                            {(
                              el as IAPIResponseEachPlaneRow_lastLevel
                            ).checks.map((i) => {
                              return (
                                <tr className="expandable-row">
                                  <td className="toggle-btn">
                                    {(i as IAPIResponseEachCheckRow).title}
                                  </td>
                                  <td className="toggle-btn">
                                    {(i as IAPIResponseEachCheckRow).level}
                                  </td>
                                  <td className="toggle-btn">
                                    {getCompliant(
                                      (i as IAPIResponseEachCheckRow).compliant
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        );
                      } else {
                        return (
                          <tr className="expandable-row">
                            <td className="toggle-btn">
                              {(el as IAPIResponseEachCheckRow).title}
                            </td>
                            <td className="toggle-btn">
                              {(el as IAPIResponseEachCheckRow).level}
                            </td>
                            <td className="toggle-btn">
                              {getCompliant(
                                (el as IAPIResponseEachCheckRow).compliant
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </>
                );
              })}
            </table>
            {/*
             *
             *
             * *
             * *
             * *
             * *
             * *
             *  */}
            <div className="table-section">
              <p id="section-font">Control Plane</p>
            </div>
            <table className="expandable-table">
              <thead className="table-top-font">
                <th>CIS CHECK</th>
                <th>LEVEL</th>
                <th>COMPLIANT</th>
              </thead>
              {/* from hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
              {response?.details.controlPlane.map((item) => {
                return (
                  <>
                    <thead className="table-subsection">
                      <th colSpan={3}>{item.category}</th>
                    </thead>
                    {item.checks.map((el) => {
                      if ((el as IAPIResponseEachPlaneRow_lastLevel).category) {
                        return (
                          <>
                            <thead className="table-subsection">
                              <th colSpan={3}>
                                {
                                  (el as IAPIResponseEachPlaneRow_lastLevel)
                                    .category
                                }
                              </th>
                            </thead>
                            {(
                              el as IAPIResponseEachPlaneRow_lastLevel
                            ).checks.map((i) => {
                              return (
                                <tr className="expandable-row">
                                  <td className="toggle-btn">
                                    {(i as IAPIResponseEachCheckRow).title}
                                  </td>
                                  <td className="toggle-btn">
                                    {(i as IAPIResponseEachCheckRow).level}
                                  </td>
                                  <td className="toggle-btn">
                                    {getCompliant(
                                      (i as IAPIResponseEachCheckRow).compliant
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        );
                      } else {
                        return (
                          <tr className="expandable-row">
                            <td className="toggle-btn">
                              {(el as IAPIResponseEachCheckRow).title}
                            </td>
                            <td className="toggle-btn">
                              {(el as IAPIResponseEachCheckRow).level}
                            </td>
                            <td className="toggle-btn">
                              {getCompliant(
                                (el as IAPIResponseEachCheckRow).compliant
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </>
                );
              })}
            </table>
            {/*
             *
             *
             * *
             * *
             * *
             * *
             * *
             *  */}
            <div className="table-section">
              <p id="section-font">Data Plane</p>
            </div>
            <table className="expandable-table">
              <thead className="table-top-font">
                <th>CIS CHECK</th>
                <th>LEVEL</th>
                <th>COMPLIANT</th>
              </thead>
              {/* from hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
              {response?.details.dataPlane.map((item) => {
                return (
                  <>
                    <thead className="table-subsection">
                      <th colSpan={3}>{item.category}</th>
                    </thead>
                    {item.checks.map((el) => {
                      if ((el as IAPIResponseEachPlaneRow_lastLevel).category) {
                        return (
                          <>
                            <thead className="table-subsection">
                              <th colSpan={3}>
                                {
                                  (el as IAPIResponseEachPlaneRow_lastLevel)
                                    .category
                                }
                              </th>
                            </thead>
                            {(
                              el as IAPIResponseEachPlaneRow_lastLevel
                            ).checks.map((i) => {
                              return (
                                <tr className="expandable-row">
                                  <td className="toggle-btn">
                                    {(i as IAPIResponseEachCheckRow).title}
                                  </td>
                                  <td className="toggle-btn">
                                    {(i as IAPIResponseEachCheckRow).level}
                                  </td>
                                  <td className="toggle-btn">
                                    {getCompliant(
                                      (i as IAPIResponseEachCheckRow).compliant
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        );
                      } else {
                        return (
                          <tr className="expandable-row">
                            <td className="toggle-btn">
                              {(el as IAPIResponseEachCheckRow).title}
                            </td>
                            <td className="toggle-btn">
                              {(el as IAPIResponseEachCheckRow).level}
                            </td>
                            <td className="toggle-btn">
                              {getCompliant(
                                (el as IAPIResponseEachCheckRow).compliant
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </>
                );
              })}
            </table>
          </div>
          <script></script>
        </body>
      </html>
    </>
  );
};

export default HardeningSummaryDetailPage;
