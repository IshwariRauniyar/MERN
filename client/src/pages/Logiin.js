import React from "react";
import Header from "../components/Header";

export default function Login() {
  return (
    <>
      <div>
        <title>Page title</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content />
        <meta name="author" content />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap"
        />
        <link rel="stylesheet" href="css/tailwind/tailwind.min.css" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-tailwind.png"
        />
      </div>
      {/* <Header> */}
      <section className="bg-gray-100">
        <div className="max-w-6xl px-6 mx-auto">
          <div className="flex flex-col items-center h-full md:flex-row">
            <div className="flex items-center justify-center w-full h-screen px-6 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
              <div className="w-full p-10 bg-white h-100">
                <h2 className="mt-1 text-2xl font-bold leading-tight md:text-2xl">
                  Log in to your account
                </h2>
                <form className="mt-6" action="#" method="POST">
                  <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name
                      id
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-3 mt-2 bg-gray-100 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                      autofocus
                      autoComplete
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      name
                      id
                      placeholder="Enter Password"
                      minLength={6}
                      className="w-full px-4 py-3 mt-2 bg-gray-100 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mt-2 text-right">
                    <a
                      href="#"
                      className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="block w-full px-4 py-3 mt-6 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:bg-indigo-400"
                  >
                    Log In
                  </button>
                </form>
                <hr className="w-full my-6 border-gray-300" />
                <button
                  type="button"
                  className="block w-full px-4 py-3 font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:bg-gray-100"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-6 h-6"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        ></path>
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible" />
                      </clipPath>
                      <path
                        clipPath="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      />
                    </svg>
                    <span className="ml-4">Log in with Google</span>
                  </div>
                </button>
                <button
                  type="button"
                  className="block w-full px-4 py-3 mt-4 font-semibold bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:bg-gray-100"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="text-blue-600 bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <span className="ml-4 text-gray-800">
                      Log in with Facebook
                    </span>
                  </div>
                </button>
                <p className="mt-8">
                  Need an account?{" "}
                  <a
                    href
                    className="font-semibold text-blue-500 hover:text-blue-700"
                  >
                    Create an account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Header> */}
    </>
  );
}
