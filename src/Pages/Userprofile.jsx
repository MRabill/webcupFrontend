import React from "react";
import AvatarsCanvas from "../Components/canvas/avatar";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import lobby from "../Assets/lobby.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import book from "../assets/book.png";
import file from "../assets/file.png";
import bookStat from "../assets/BookStat.png";
import stat from "../assets/stats.png";
import squad from "../assets/Squad.png";
import squadGroup from "../assets/squadGroup.png";
import squadBook from "../assets/squadBook.png";
import backgroundSound from "../Assets/hawken.mp3";
import { useOverlay } from "../Context/OverlayContext";
import { useUser } from "../Context/UserContext";
import { url, useMutation, postData, useQuery, fetchData, useQueryClient} from "../../utils";


const UserProfile = () => {
  const { overlay, setIsOpen } = useOverlay();
  const { user, signing, logout } = useUser();

  const audio = new Audio(backgroundSound);
  audio.loop = true;
  audio.play();

  const { isLoading: heroLoading, data: heros = {}, refetch } = useQuery(
    ["developers-detail"],
    () => fetchData({ url: url?.GET_DETAILS(user?.username) }),

    { refetchOnWindowFocus: false },
    {
      onError: (e) => {
        console.log("Error fetching developers: ", e);
      },
    }
  );


 
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="absolute top-13 sm:top-13 md:top-16 lg:top-22 xl:top-26 right-1 sm:right-3 md:right-5 lg:right-9 xl:right-13 z-50">
        <button
          style={{ height: "50px", marginTop: "20px" }}
          className="kave-btn"
          onClick={() => {
            logout();
          }}
        >
          Log-out
        </button>
      </div>

      {/* Left card */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        className="relative bg-151031 p-5 rounded-2xl md:w-[480px] w-full mr-4 "
      >
        <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)",
              opacity: "0.5",
            }}
            className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl"
          >
            {/* Content for right card */}
            <h2 className="text-lg font-semibold mb-4 text-white">
              Power Profile
            </h2>
            <p className="text-sm text-white">
              <strong>Name:</strong> {heros?.payload?.heroName}
              <br />
              <span className="inline-block mt-2">
                <strong>Power:</strong> {heros?.payload?.superpower}
              </span>
              <br />
              <span className="inline-block mt-2">
                <strong>Completion:</strong> 75%
              </span>
              <br />
            </p>
            <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
              <img
                src={squadBook}
                alt="squad"
                className="w-62 h-auto object-cover rounded-2xl'"
              />
            </Tilt>
            {/* Button */}
            <button
              className="absolute top-0 right-0 mt-4 mr-4 px-4 py-2 bg-white text-black rounded-lg shadow"
              onClick={() => {
                overlay({
                  type: "form",
                  title: "Edit Profile",
                  content: "Please fill the form below",
                  form: NewForm,
                  onOk: () => {
                    console.log("Okay");
                  },
                  onCancel: () => {
                    console.log("Cancel");
                  },
                });
              }}
            >
              Edit
            </button>
          </div>
        </Tilt>
      </motion.div>

      {/* Avatar */}

      <motion.div
        initial={{ y: "100%" }}
        animate={{
          y: 0,
        }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
        className="flex justify-center items-center h-screen "
      >
        <AvatarsCanvas />
      </motion.div>

      {/* Right card */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        className="bg-151031 p-5 rounded-2xl md:w-[480px] w-full mr-4 "
      >
        <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)",
              opacity: "0.5",
            }}
            className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl"
          >
            {/* Content for right card */}
            <h2 className="text-lg font-semibold mb-2 text-white">
              Hero Profile
            </h2>
            <p className="text-sm text-white">
              <strong>Weaknesses:</strong> {heros?.payload?.weakness}
              <br />
              <strong className="inline-block mt-2">
                Goals/Aspirations:
              </strong>
              {heros?.payload?.goals}
              <br />
              <strong className="inline-block mt-2">
                Equipment/Tools:
              </strong>{" "}
             {heros?.payload?.equipment}
              <br />
              <strong className="inline-block mt-2">
                Course:
              </strong>{" "}
             {heros?.payload?.currentTraining}
              <br />
            </p>
            <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
              <img
                src={stat}
                alt="stat"
                className="w-full h-full object-cover rounded-2xl'"
              />
            </Tilt>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default UserProfile;



const NewForm = () => {
  const { overlay, setIsOpen } = useOverlay();

  const queryClient = useQueryClient()
  const { user, signing, logout } = useUser();
  console.log(user);
  const onFinish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    saveDetails.mutate(data);
  };

  const { isLoading: heroLoading, data: heros = {}, refetch } = useQuery(
    ["developers-detail"],
    () => fetchData({ url: url?.GET_DETAILS(user?.username) }),

    { refetchOnWindowFocus: false },
    {
      onError: (e) => {
        console.log("Error fetching developers: ", e);
      },
    }
  );

  const saveDetails = useMutation(
    async (values) =>
      await postData({
        url: url?.SAVE_DETAILS,
        body: {
          ...values,
          user: user?.email,
          email: user?.username
        },
      }),
    {
      onSuccess: (data) => {
       
          overlay({
            type: "success",
            title: "Success",
            content: "Profile Updated Sucessfully. View your profile on the right!",
            okText: "Continue",
            onOk: () => {
              queryClient.invalidateQueries('developers-detail')
            },
            onCancel: () => {
             
            },
          });
      },
      onError: (data) => {
        overlay({
          type: "warning",
          title: "Failed",
          content: "Profile Update Failed. Please try again",

          onOk: () => {
            // logout();
          },
          onCancel: () => {
            // logout();
          },
        });
      },
    }
  );

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onFinish}>
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "white",
                }}
              >
                Weaknesses
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="weakness"
                 defaultValue={heros?.payload?.weakness}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{
                    fontFamily: "Poppins",
                    paddingLeft: "10px",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "white",
                }}
              >
                Goals
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="goal"
                  defaultValue={heros?.payload?.goals}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{
                    fontFamily: "Poppins",
                    paddingLeft: "10px",
                  }}
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "white",
                }}
              >
                Equipment
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="equipment"
                
                  defaultValue={heros?.payload?.equipment}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{
                    fontFamily: "Poppins",
                    paddingLeft: "10px",
                  }}
                />
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {saveDetails?.isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a qualified Hero yet?
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              style={{
                paddingLeft: "5px",
              }}
            >
              Register
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

