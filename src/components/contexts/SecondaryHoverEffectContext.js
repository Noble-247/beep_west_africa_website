import { createContext } from "react";

export const SecondaryHoverEffectContext = createContext();

const SecondaryHoverEffectContextProvider = (props) => {
  function secondaryMouseEnterEffect(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }

  function secondaryMouseLeaveEvent(event) {
    event.target.style.backgroundColor = "#1E2B37";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }
  return (
    <SecondaryHoverEffectContext.Provider
      value={{ secondaryMouseEnterEffect, secondaryMouseLeaveEvent }}
    >
      {props.children}
    </SecondaryHoverEffectContext.Provider>
  );
};

export default SecondaryHoverEffectContextProvider;
