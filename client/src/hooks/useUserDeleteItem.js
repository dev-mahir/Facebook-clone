import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../redux/auth/action";

const useUserDeleteItem = (key, value) => {
    const { user } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState([]);

  useEffect(() => {
      const finalWork = key.filter((data) => data.key !== value);
      setUserData(finalWork)
  }, [key, value]);
  useDispatch(profileUpdate(user._id, { work: userData }));
};

export default useUserDeleteItem;
