import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(JSON.parse(localStorage.getItem("Theme-Indra") || "false"));
  }, []);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    window.localStorage.setItem("Theme-Indra", JSON.stringify(!isDark));
  };
  const authInfo = { handleThemeChange, isDark };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
