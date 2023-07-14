import React from "react";
import "./CircleProgressBar.css";
import { useGlobalContext } from "../../context";
const CircleProgressBar = () => {
  const {
    minutes,
    rmintues,
    second,
    isBreakTime,
    breakTime,
    sessionTime,
    complete,
  } = useGlobalContext();
  let circleWidth = 280;
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const deashOffset = dashArray - (dashArray * complete) / 100;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stop-color="#12c2e9" />
            <stop offset="50%" stop-color="#c471ed" />
            <stop offset="100%" stop-color="#f64f59" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: deashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="cicle-text"
          fill="url(#gradient)"
        >
          {!isBreakTime && (
            <>
              {minutes < 10 ? (
                second < 10 ? (
                  <>{`0${minutes}:0${second}`}</>
                ) : (
                  <>{`0${minutes}:${second}`}</>
                )
              ) : second < 10 ? (
                <>{`${minutes}:0${second}`}</>
              ) : (
                <>{`${minutes}:${second}`}</>
              )}
            </>
          )}
          {isBreakTime && (
            <>
              {rmintues < 10 ? (
                second < 10 ? (
                  <>{`0${rmintues}:0${second}`}</>
                ) : (
                  <>{`0${rmintues}:${second}`}</>
                )
              ) : second < 10 ? (
                <>{`${rmintues}:0${second}`}</>
              ) : (
                <>{`${rmintues}:${second}`}</>
              )}
            </>
          )}
        </text>
      </svg>
      <div className="notice">
        Up next :
        {!isBreakTime && (
          <>
            {breakTime < 10 ? (
              <>{` 0${breakTime} minute rest`}</>
            ) : (
              <>{` ${breakTime} minute rest`}</>
            )}
          </>
        )}
        {isBreakTime && (
          <>
            {sessionTime < 10 ? (
              <>{` 0${sessionTime} minute work`}</>
            ) : (
              <>{` ${sessionTime} minute work`}</>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default CircleProgressBar;
