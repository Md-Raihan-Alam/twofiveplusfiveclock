import { FaPlay, FaStop, FaRecycle } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./TimeSetting.css";
const TimeSetting = () => {
  const { handleStart, handlePause, handleReset } = useGlobalContext();
  return (
    <div className="setting">
      <button className="start" onClick={handleStart}>
        <FaPlay />
      </button>
      <button className="stop" onClick={handlePause}>
        <FaStop />
      </button>
      <button className="reset" onClick={handleReset}>
        <FaRecycle />
      </button>
    </div>
  );
};
export default TimeSetting;
