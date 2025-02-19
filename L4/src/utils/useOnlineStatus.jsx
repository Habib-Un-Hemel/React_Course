import { useEffect,useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //return true or false
  return onlineStatus;
};
export default useOnlineStatus;
