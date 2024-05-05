import React, { lazy, Suspense, useState } from "react";
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
import Library from "./Pages/Library";

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
  {
    path: "/library",
    element: <Library />,
  },
]);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Desktop Menu */}
      <nav className="hidden lg:block bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
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
          <div className="flex items-center lg:order-2">
            <a
              href="/"
              className="text-white px-3 py-2 rounded hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="/profile"
              className="text-white px-3 py-2 rounded hover:bg-gray-700"
            >
              Profile
            </a>
            <a
              href="/training"
              className="text-white px-3 py-2 rounded hover:bg-gray-700"
            >
              Training
            </a>
            <a
              href="/library"
              className="text-white px-3 py-2 rounded hover:bg-gray-700"
            >
              Library
            </a>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className="lg:hidden bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
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
          <div className="flex items-center lg:order-2">
            {/* Hamburger Menu Icon */}
            <button
              onClick={toggleMenu}
              className="block lg:hidden text-gray-300 hover:text-white focus:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black fixed inset-0 z-50`}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-white m-4 focus:outline-none"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <a
            href="/"
            className="text-white py-4 text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/profile"
            className="text-white py-4 text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Profile
          </a>
          <a
            href="/training"
            className="text-white py-4 text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Training
          </a>
          <a
            href="/library"
            className="text-white py-4 text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Library
          </a>
        </div>
      </div>
    </header>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <UserProvider>
          <OverlayProvider>
            <Header />
            <RouterProvider router={router} size={20} />
          </OverlayProvider>
        </UserProvider>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
