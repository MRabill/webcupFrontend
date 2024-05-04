import { AnimatePresence, motion } from "framer-motion";
import { SiReaddotcv } from "react-icons/si";

const FormModal = ({ isOpen, setIsOpen, detail, Form }) => {
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
            className="bg-[url('../Assets/landingPge.jpg')] text-black p-6 rounded-xl w-full max-w-2xl shadow-2xl cursor-default relative overflow-hidden"
          >
            {/* <SiReaddotcv className="text-[#EEEDFE] rotate-12 text-[200px] absolute z-0 -top-6 -left-16" /> */}
            <div className="relative z-10">
              <h3
                style={{ color: "white" }}
                className="text-3xl font-bold text-center mb-2"
              >
                {detail.title}
              </h3>
              <p className="text-center mb-6" style={{ color: "white" }}>
                {detail.content}
              </p>
              <Form />
              {/* <div className="flex gap-4 justify-end">
                <CButton text={"Cancel"} action={detail.onCancel} />
                <CButton text={"Add"} action={detail.onOk} />
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;
