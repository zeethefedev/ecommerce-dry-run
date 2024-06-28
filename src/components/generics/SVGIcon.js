import React from "react";

const ICONS = {
  minus: (
    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
  ),
  plus: (
    <>
      <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
      <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
    </>
  ),
  close: (
    // 0 0 512 512
    <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
  ),
  "arrow-right": (
    <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
  ),
};

function SVGIcon(props) {
  const {
    icon,
    fill = "currentColor",
    height = "1em",
    width = "1em",
    viewBox = "0 0 1024 1024",
  } = props;
  const match = Object.entries(ICONS).find((ic) => ic[0] === icon);

  return (
    <>
      {match && (
        <svg viewBox={viewBox} fill={fill} height={height} width={width}>
          {match[1]}
        </svg>
      )}
    </>
  );
}

export default SVGIcon;
