import React, { lazy, Suspense } from "react";
import { UserProvider } from "./Context/UserContext";
import { OverlayProvider } from "./Context/OverlayContext";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
import Training from "./Pages/Training";
import Profile from "./Pages/Profile";
import logoWebcup from "./Assets/logoWebcup.png";

import teleport from "./Assets/teleport.mp3";

const queryClient = new QueryClient();

const Setting = lazy(() => import("./Pages/Setting"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
      }}
    >
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/training",
    element: <Training />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <UserProvider>
          <OverlayProvider>
            <header>
              <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <a href="/" className="flex items-center">
                    <img
                      src={logoWebcup}
                      className="mr-3 h-6 sm:h-9"
                      alt="Flowbite Logo"
                      style={{
                        height: "50px",
                      }}
                    />
                    <span
                      className="self-center text-xl font-semibold whitespace-nowrap text-white"
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      Vigilant Ventures Institute VVI
                    </span>
                  </a>
                  <div className="flex items-center lg:order-2"></div>
                  <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                  >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                        <a
                          href="/"
                          className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                          aria-current="page"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/profile"
                          className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="/training"
                          className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Training
                        </a>
                      </li>
                      <li>
                        <a
                          href="/library"
                          className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Library
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            <RouterProvider router={router} size={20} />
          </OverlayProvider>
        </UserProvider>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
