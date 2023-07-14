import "./Hero.css";
import Btn from "../timeset/TimeSet";
import CircleProgressBar from "../circleprogressbar/CircleProgressBar";
import TimeSetting from "../timesetting/TimeSetting";
const Hero = () => {
  return (
    <div className="hero">
      <Btn />
      <CircleProgressBar />
      <TimeSetting />
    </div>
  );
};
export default Hero;
