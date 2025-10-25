import { useLocation, Navigate } from "react-router";

export function ValidateQueryParams({ allowed = [], allowNone = false, children }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const keys = Array.from(searchParams.keys());

  // اگر هیچ کوئری نباید باشه ولی هست
  if (allowNone && keys.length > 0) {
    return <Navigate to="/404" replace />;
  }

  // اگر فقط یه سری از کوئری‌ها مجازن
  if (!allowNone) {
    const invalidParam = keys.find((k) => !allowed.includes(k));
    if (invalidParam) {
      return <Navigate to="/404" replace />;
    }
  }

  return children;
}
