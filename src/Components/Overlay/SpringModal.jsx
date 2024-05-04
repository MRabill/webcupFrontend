import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";

const SpringModal = ({ isOpen, setIsOpen, detail }) => {
  const onOkay = () => {
    setIsOpen(false);
    detail?.onOk();
  };

  const onCancel = () => {
    setIsOpen(false);
    detail?.onCancel();
  };

  const onAction = () => {
    setIsOpen(false);
    detail?.onAction();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className={` ${
              detail?.type === "success"
                ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white"
                : detail?.type === "warning"
                ? "bg-[white] text-[#FAAD14]"
                : "bg-[white] text-[#FF4D4F]"
            } p-6 rounded-xl w-full max-w-lg shadow-2xl cursor-default relative overflow-hidden`}
          >
            {detail?.type === "success" ? (
              <FaRegCircleCheck className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            ) : detail?.type === "warning" ? (
              <FiAlertCircle className="text-[#FAAD14] opacity-25 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            ) : (
              <FiAlertCircle className="text-[#FF4D4F] opacity-25 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            )}

            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                {detail?.type === "success" ? (
                  <FaRegCircleCheck />
                ) : detail?.type === "warning" ? (
                  <FiAlertCircle className="text-[#FAAD14]" />
                ) : (
                  <FiAlertCircle className="text-[#FF4D4F]" />
                )}
              </div>
              <h3
                className="text-3xl font-bold text-center mb-2"
                // style={{ color: "white" }}
              >
                {detail.title}
              </h3>
              <p
                className={` ${
                  detail?.type === "success" ? "text-[white]" : "text-[black]"
                } text-center mb-6`}
              >
                {detail.content}
              </p>
              <div className="flex gap-2">
                {detail?.type === "success" ? (
                  <>
                    {detail?.actionButton && (
                      <button
                        onClick={onAction}
                        className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded-md"
                      >
                        {detail?.actionText}
                      </button>
                    )}

                    <button
                      onClick={onOkay}
                      className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded-md"
                    >
                      {detail?.okText}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onOkay}
                    className="bg-[#E7E7E7] text-black opacity-60 hover:opacity-100 transition-opacity  font-semibold w-full py-2 rounded-md"
                  >
                    {detail?.okText}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
