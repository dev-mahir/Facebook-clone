import { useEffect } from "react";

const usePopupClose = (ref, setRef) => {
  useEffect(() => {
    document.addEventListener("mousedown", function (e) {
      if (ref.current) {
        if (ref.current && !ref?.current?.contains(e.target)) {
          setRef(false);
        }
      }
    });
  }, [ref, setRef]);
};


export default usePopupClose;
