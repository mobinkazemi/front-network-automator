import { useStatisticsQuery } from "@/actions/device";

// ----------------------------------------------------------------------

export const DeviceHardeningResultView = () => {
  const { statistics, statisticsLoading } = useStatisticsQuery();

  if (statisticsLoading) return "Loading...";

  return (
    <>
      <div>
        <h1>امار نتایج بدست آمده</h1>

        <div>
          <span>انجام شده</span>
          <span>{statistics.true_results_count}</span>
        </div>

        <div>
          <span>انجام نشده</span>
          <span>{statistics.false_results_count}</span>
        </div>

        <div>
          <span>قایل انجام نمی باشد</span>
          <span>{statistics.not_applicable_results_count}</span>
        </div>
      </div>

      <hr />

      <div>
        <h1>جزئیات هدف</h1>

        <div>
          <span>هدف</span>
          <span>--</span>
        </div>

        <div>
          <span>نسخه IOS</span>
          <span>{statistics.false_results_count}</span>
        </div>

        <div>
          <span>بررسی شده</span>
          <span>{statistics.not_applicable_results_count}</span>
        </div>
      </div>
    </>
  );
};
