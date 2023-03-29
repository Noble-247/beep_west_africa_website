import { createContext } from "react";

export const PrimaryHoverEffectContext = createContext();

function PrimaryHoverEffectContextProvider(props) {
  function primaryMouseEnterEvent(event) {
    event.target.style.backgroundColor = "rgba(30, 193, 219, 0.8)";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }
  function primaryMouseLeaveEvent(event) {
    event.target.style.backgroundColor = "#17a2b8";
    event.target.style.transition = "0.5s";
    event.target.style.transition = "transition-timing-function: ease-in-out";
  }
  return (
    <PrimaryHoverEffectContext.Provider
      value={{ primaryMouseEnterEvent, primaryMouseLeaveEvent }}
    >
      {props.children}
    </PrimaryHoverEffectContext.Provider>
  );
}

export default PrimaryHoverEffectContextProvider;
