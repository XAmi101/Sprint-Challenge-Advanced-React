//

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage("dark-mode");
useEffect(() => {
 darkMode
   ?  window.document.body.classList.add("dark-mode")
   :  window.document.body.classList.remove("dark-mode");
}, [darkMode]);


  return [darkMode, setDarkMode];
  };

export default useDarkMode;
