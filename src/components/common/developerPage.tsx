import { Player } from "@lottiefiles/react-lottie-player";
import DeveloperAnimation from "@/assets/lotties/developer.json";

const DeveloperPage = () => {
  return (
    <div className="intro_lottie_wrapper">
      <div className="intro_lottie_container">
        <Player autoplay loop src={DeveloperAnimation} />
      </div>
    </div>
  );
};

export default DeveloperPage;
