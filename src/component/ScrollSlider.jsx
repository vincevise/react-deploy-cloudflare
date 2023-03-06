import React, { memo, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const ScrollSlider = ({ data }) => {
  const { setIsArrow } = useContext(GlobalContext);

  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);

  return (
    <div
      className=" w-full h-[400px]  overflow-x-scroll flex  "
      onMouseEnter={() => setIsArrow(true)}
      onMouseLeave={() => setIsArrow(false)}
      {...events}
      ref={ref}
    >
      {data?.map((x, i) => (
        <div className="w-11/12 p-2 shrink-0  mx-2 bg-gray-100" key={i}>
          <img
            src={x}
            alt=""
            className="h-full object-contain  "
            onDragStart={(event) => event.preventDefault()}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(ScrollSlider);
