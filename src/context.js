import { createContext, useContext, useState, useEffect } from "react";
import alarmSound from "./assets/mixkit-alarm-tone-996.wav";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [sessionTime, setSessionTime] = useState(25);
  const [minutes, setMinuteTime] = useState(sessionTime);
  const [second, setSeconds] = useState(0);
  const [breakTime, setBreakTime] = useState(5);
  const [rmintues, setRminuteTime] = useState(breakTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [complete, setComplete] = useState(0);
  useEffect(() => {
    let timer = null;

    if (isRunning) {
      if (!isBreakTime) {
        if (minutes === 0 && second === 0) {
          setIsBreakTime(true);
          setRminuteTime(breakTime);
          const audio = new Audio(alarmSound);
          audio.play();
          setSeconds(0);
        } else {
          timer = setTimeout(() => {
            if (second > 0) {
              setSeconds(second - 1);
            } else {
              setMinuteTime(minutes - 1);
              setSeconds(59);
            }
          }, 1000);
        }
      } else {
        if (rmintues === 0 && second === 0) {
          setIsBreakTime(false);
          setMinuteTime(sessionTime);
          const audio = new Audio(alarmSound);
          audio.play();
          setSeconds(0);
        } else {
          timer = setTimeout(() => {
            if (second > 0) {
              setSeconds(second - 1);
            } else {
              setRminuteTime(rmintues - 1);
              setSeconds(59);
            }
          }, 1000);
        }
      }
    }
    const calculatePercentage = () => {
      const totalDurationInSeconds = isBreakTime
        ? breakTime * 60
        : sessionTime * 60;
      const remainingDurationInSeconds = isBreakTime
        ? rmintues * 60 + second
        : minutes * 60 + second;
      const percentage =
        ((totalDurationInSeconds - remainingDurationInSeconds) /
          totalDurationInSeconds) *
        100;
      return percentage.toFixed(2);
    };

    const per = calculatePercentage();
    setComplete(per);
    return () => clearTimeout(timer);
  }, [
    isRunning,
    minutes,
    rmintues,
    second,
    isBreakTime,
    sessionTime,
    breakTime,
  ]);
  const incSession = () => {
    if (sessionTime < 99 && !isRunning) {
      setSessionTime(sessionTime + 1);
      setMinuteTime(minutes + 1);
    }
  };
  const decSession = () => {
    if (sessionTime > 1 && !isRunning) {
      setSessionTime(sessionTime - 1);
      setMinuteTime(minutes - 1);
    }
  };
  const incBreak = () => {
    if (breakTime < 99 && !isRunning) {
      setBreakTime(breakTime + 1);
      setRminuteTime(rmintues + 1);
    }
  };
  const decBreak = () => {
    if (breakTime > 1 && !isRunning) {
      setBreakTime(breakTime - 1);
      setRminuteTime(rmintues - 1);
    }
  };
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setSessionTime(25);
    setMinuteTime(25);
    setSeconds(0);
    setBreakTime(5);
    setRminuteTime(breakTime);
    setIsRunning(false);
    setIsBreakTime(false);
  };
  return (
    <GlobalContext.Provider
      value={{
        sessionTime,
        breakTime,
        incSession,
        decSession,
        incBreak,
        decBreak,
        minutes,
        second,
        rmintues,
        handleStart,
        handlePause,
        isBreakTime,
        handleReset,
        complete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
