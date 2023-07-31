export interface LoginFormProps {
  title: string;
  titleFontSize: "text-2xl" | "text-3xl" | "text-4xl";
  titleFontWeight: "font-normal" | "font-bold";
  titleTextColor: "text-gray-500" | "text-gray-700" | "text-black";

  subTitle: string;
  subTitleFontSize: "text-sm" | "text-base" | "text-lg";
  subTitleFontWeight: "font-normal" | "font-bold";
  subTitleTextColor: "text-gray-500" | "text-gray-700" | "text-black";

  buttonText: string;
  buttonFontSize: "text-sm" | "text-base" | "text-lg";
  buttonFontWeight: "font-normal" | "font-bold";
  buttonTextColor: "text-white" | "text-gray-100" | "text-gray-200";
  buttonBackgroundColor: "bg-blue-500" | "bg-green-500" | "bg-red-500";
}

export const initialProps: LoginFormProps = {
  title: "Login",
  titleFontSize: "text-3xl",
  titleFontWeight: "font-bold",
  titleTextColor: "text-black",

  subTitle: "Please enter your credentials",
  subTitleFontSize: "text-base",
  subTitleFontWeight: "font-normal",
  subTitleTextColor: "text-gray-700",

  buttonText: "Submit",
  buttonFontSize: "text-base",
  buttonFontWeight: "font-bold",
  buttonTextColor: "text-white",
  buttonBackgroundColor: "bg-blue-500",
};

const LoginForm = ({
  title,
  titleFontSize,
  titleFontWeight,
  titleTextColor,

  subTitle,
  subTitleFontSize,
  subTitleFontWeight,
  subTitleTextColor,

  buttonText,
  buttonFontSize,
  buttonFontWeight,
  buttonTextColor,
  buttonBackgroundColor,
}: LoginFormProps) => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className={`${titleFontSize} ${titleFontWeight} ${titleTextColor}`}>{title}</h1>
          <p className={`${subTitleFontSize} ${subTitleFontWeight} ${subTitleTextColor}`}>{subTitle}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        </div>
        <div className="flex items-center justify-between">
          <button className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ${buttonFontSize} ${buttonFontWeight} ${buttonTextColor} ${buttonBackgroundColor} px-4 py-2 rounded focus:outline-none focus:shadow-outline`} type="button">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;