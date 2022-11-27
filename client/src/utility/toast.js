import { toast } from "react-toastify";


export const createToast = (message, type = "error") => { 
    switch (type) {
        case "error":
            toast.error(message);
            break;
        case "success":
            return toast.success(message);
        case "warn":
            return toast.warn(message);
        case "info":
            return toast.info(message);
        default:
            break;
    }
}

