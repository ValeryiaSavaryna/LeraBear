import React from "react";

export const burgers = (ref) => (
  <div className="burgers" ref={ref}>
    <div className="burger for-mr-johnson">
      <div className="top-bun" />
      <div className="onion" />
      <div className="beef" />
      <div className="cheese" />
      <div className="pickles" />
      <div className="egg" />
      <div className="bottom-bun" />
    </div>
    <div className="burger for-mrs-johnson">
      <div className="top-bun" />
      <div className="tomato" />
      <div className="beef" />
      <div className="cheese" />
      <div className="pepper" />
      <div className="lettuce" />
      <div className="bottom-bun" />
    </div>
    <div className="burger for-little-peter">
      <div className="top-bun" />
      <div className="bottom-bun" />
      <div className="bacon" />
      <div className="tomato" />
      <div className="egg" />
      <div className="cheese" />
    </div>
  </div>
);
