import React, { createContext, useEffect, useState } from "react";
export const parentContext = createContext();

export const ParentContext = (props) => {
  const [indivisualPage, setindivisual] = useState(() => {
    return JSON.parse(localStorage.getItem("LOCAL_STORAGE_KEY")) || [];
  });

  useEffect(() => {
    localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(indivisualPage));
  }, [indivisualPage]);
  return (
    <parentContext.Provider value={{ indivisualPage, setindivisual }}>
      {props.children}
    </parentContext.Provider>
  );
};
