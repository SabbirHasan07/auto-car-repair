import CompanyServices from "./Components/Home/CompanyServices";
import WelcomeText from "./Components/Home/WelcomeText";
import VideoComponent from "./Components/VideoComponent/VideoComponent";


export default function Home() {
  return (
    <div>

      <VideoComponent
        videoSrc="/videos/banner.mp4"
        demoname="Elevating Style, Comfort, and Elegance for Modern Living"
      />
      <CompanyServices/>
      <WelcomeText />

    </div>
  );
}
