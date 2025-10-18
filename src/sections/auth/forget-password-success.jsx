import { Link } from "react-router";

// ----------------------------------------------------------------------

export function ForgetPasswordSuccess() {
  return (
    <>
      <div className="mx-auto flex size-[123px] items-center justify-center rounded-[36px] bg-[#CDF4E3]">
        <svg
          width="74"
          height="73"
          viewBox="0 0 74 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.414 15.4589C9.25 17.0949 9.25 21.9579 9.25 31.6839V36.4736C9.25 53.6228 22.3201 61.9449 30.5206 65.4787C32.745 66.4373 33.8573 66.9166 37 66.9166C40.1427 66.9166 41.255 66.4373 43.4794 65.4787C51.6799 61.9449 64.75 53.6228 64.75 36.4736V31.6839C64.75 21.9579 64.75 17.0949 63.586 15.4589C62.422 13.8229 57.7868 12.2577 48.5165 9.12733L46.7504 8.53093C41.918 6.89915 39.5018 6.08325 37 6.08325C34.4982 6.08325 32.082 6.89915 27.2496 8.53093L25.4835 9.12733C16.2132 12.2577 11.578 13.8229 10.414 15.4589ZM46.4333 31.9359C47.2839 30.9961 47.2012 29.554 46.2485 28.7149C45.2958 27.8758 43.834 27.9574 42.9834 28.8972L33.6964 39.158L31.0166 36.1972C30.166 35.2574 28.7042 35.1758 27.7515 36.0149C26.7988 36.854 26.7161 38.2961 27.5667 39.2359L31.9714 44.1026C32.4102 44.5873 33.0377 44.8645 33.6964 44.8645C34.3552 44.8645 34.9827 44.5873 35.4214 44.1026L46.4333 31.9359Z"
            fill="#2CAE76"
          />
        </svg>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <span className="text-3xl font-bold text-[#2CAE75]">تبریک!</span>
        <span className="mt-3 text-sm text-green-600">
          رمزعبور شما با موفقیت تغییر یافت
        </span>
      </div>

      <Link
        to="/auth/sign-in"
        className="mt-10 flex w-full items-center justify-center rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        بازگشت به صفحه ورود
      </Link>
    </>
  );
}
