import { FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./TimeSet.css";
const Btn = () => {
  const { sessionTime, breakTime, incSession, decSession, incBreak, decBreak } =
    useGlobalContext();
  return (
    <div className="container">
      <div className="workintTimeSet">
        <button className="plus" onClick={incSession}>
          <FaPlus />
        </button>
        <button className="workTime">
          <div>Session length:</div>
          {sessionTime < 10 ? (
            <div>{`0${sessionTime}:00`}</div>
          ) : (
            <div>{`${sessionTime}:00`}</div>
          )}
        </button>
        <button className="minus" onClick={decSession}>
          <FaMinus />
        </button>
      </div>
      <div className="restingTimeSet">
        <button className="plus" onClick={incBreak}>
          <FaPlus />
        </button>
        <button className="restingTime">
          <div>Break length:</div>
          {breakTime < 10 ? (
            <div>{`0${breakTime}:00`}</div>
          ) : (
            <div>{`${breakTime}:00`}</div>
          )}
        </button>
        <button className="minus" onClick={decBreak}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};
export default Btn;
