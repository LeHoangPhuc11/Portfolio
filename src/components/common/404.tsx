import { Player } from "@lottiefiles/react-lottie-player";
import NotFound from "@/assets/lotties/404.json";

const NotFoundPage = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
     <Player autoplay loop src={NotFound} />
    </div>
  );
};

export default NotFoundPage;
