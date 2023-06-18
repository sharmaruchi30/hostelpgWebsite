import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Notify = (message) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export default Notify;
