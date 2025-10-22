import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`404 page not found! - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            صفحه موردنظر یافت نشد
          </h1>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dashboard"
              class="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              بازگشت به پیشخوان
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
