import { createContext, useState } from "react";


export const AuthContext = createContext();


export function ThemeProvider({children}){


  const [darkMode,setDarkMode] = useState(true);


  return(

    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}