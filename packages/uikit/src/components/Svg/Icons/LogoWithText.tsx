import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <>
      {" "}
      <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "rgb(0, 0, 0)", width: "40px" }}
        clipRule="evenodd"
        fillRule="evenodd"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 13.12 11.86"
      >
        <g>
          <g>
            <path
              d="M10.92 4.79c-1.75,-2.61 -9.12,-6.73 -10.92,-2.23 1.93,-5.6 9.71,-0.59 11.73,1.41l0.58 -0.6 0.16 2.3 -2.09 -0.39 0.55 -0.5z"
              style={{ fill: "rgb(215 208 208)" }}
            />
            <path
              d="M9.6 6.71c-1.34,-2.16 -7.69,-7.8 -9.25,-4.2 1.71,-4.47 8.35,1.9 9.93,3.57l0.48 -0.47 0.07 1.87 -1.68 -0.37 0.46 -0.39z"
              style={{ fill: "rgb(215 208 208)" }}
            />
            <path
              d="M3.8 6.1c1.34,2.16 7.69,7.8 9.25,4.2 -1.71,4.47 -8.35,-1.9 -9.93,-3.57l-0.48 0.47 -0.07 -1.87 1.68 0.37 -0.46 0.39z"
              style={{ fill: "rgb(252, 114, 255)" }}
            />
            <path
              d="M4.74 4.01c0.95,2.36 6.21,9.02 8.38,5.75 -2.46,4.1 -7.89,-3.32 -9.16,-5.25l-0.56 0.38 0.26 -1.85 1.59 0.66 -0.52 0.3z"
              style={{ fill: "rgb(252, 114, 255)" }}
            />
          </g>
        </g>
      </Svg>
      <span
        style={{
          fontWeight: "700",
          marginLeft: "5px",
          marginTop: "5px",
          fontSize: "22px",
          fontStyle: "normal",
          color: "rgb(252, 114, 255)",
        }}
      >
        BetterX
      </span>
    </>
  );
};

export default Logo;
