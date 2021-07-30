import React from "react";
const Scroll = () => {
  const style = {
    position: "fixed",
    bottom: 15,
    right: 15,
    background: "cyan",
    padding: 5,
    zIndex: 3,
    borderRadius: 30,
    opacity: 0.7,
  };
  const scrolltop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <button onClick={scrolltop} className="scrollTop" style={style}>
        <i class="fas fa-arrow-up"></i>
      </button>
    </>
  );
};
export default Scroll;
