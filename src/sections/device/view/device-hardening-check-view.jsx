import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export function DeviceHardeningCheckView() {
  const [data, setData] = useState([]);

  const { deviceId, cisId } = useParams();

  useEffect(() => {
    const query = async () => {
      const response = await axiosInstance.get(
        `/hardening/hardening_check_list/${cisId}`
      );
      setData(response.data.data.cis.categories);
    };

    query();
  }, []);

  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_SERVER_URL}/hardening/stream/check/${deviceId}_${cisId}`
    );

    eventSource.onmessage = (event) => {
      const update = JSON.parse(event.data);

      setData((prevData) => {
        const newData = {};

        for (const plane in prevData) {
          newData[plane] = {};

          for (const category in prevData[plane]) {
            newData[plane][category] = prevData[plane][category].map((rule) =>
              rule.id === update.data?.hardeningId
                ? { ...rule, finalResult: update.data?.finalResult }
                : rule
            );
          }
        }

        return newData;
      });
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="max-w-7xl">
      {Object.entries(data).map(([plane, categories]) => (
        <div key={plane} className="mb-6">
          <h2 className="flex h-12 items-center rounded-2xl bg-gray-500 pr-6 text-base font-bold text-white">
            {plane}
          </h2>

          {Object.entries(categories).map(([category, rules]) => (
            <div key={category} className="mt-2 ml-4">
              <h3 className="text-lg font-medium text-gray-700">{category}</h3>

              <ul className="ml-6 list-disc space-y-1">
                {rules.map((rule) => (
                  <li
                    key={rule.id}
                    className="mt-1 flex h-12 items-center rounded-2xl bg-gray-100 px-4"
                  >
                    <span className="flex-1 font-semibold">{rule.title}</span>

                    <span
                    // className={
                    //   rule.finalResult ? "text-green-600" : "text-red-600"
                    // }
                    >
                      {!Object.keys(rule).includes("finalResult") && (
                        <div className="loader"></div>
                      )}

                      {rule.finalResult === null && (
                        <div className="flex items-center gap-x-2 text-gray-500">
                          <span className="text-sm">قابل انجام نمی باشد</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                              fill="#808080"
                            />
                          </svg>
                        </div>
                      )}

                      {rule.finalResult === true && (
                        <div className="flex items-center gap-x-2 text-green-500">
                          <span className="text-sm">انجام شده</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                              fill="#2CAE76"
                            />
                          </svg>
                        </div>
                      )}

                      {rule.finalResult === false && (
                        <div className="flex items-center gap-x-2 text-red-500">
                          <span className="text-sm">انجام نشده</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                              fill="#DE2C43"
                            />
                          </svg>
                        </div>
                      )}

                      {/* {if(!Object.keys(rule).includes("finalResult")) {
                          return <div class="loader"></div>
                        } elseif(rule.finalResult == )}
                        {!Object.keys(rule).includes("finalResult") ? (
                          
                        ) : rule.finalResult ? (
                          <div className="flex items-center gap-x-2 text-green-500">
                            <span className="text-sm">انجام شده</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                fill="#2CAE76"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="flex items-center gap-x-2 text-red-500">
                            <span className="text-sm">انجام نشده</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                                fill="#DE2C43"
                              />
                            </svg>
                          </div>
                        )} */}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
