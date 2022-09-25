import Alphabet from "../../components/Alphabet";
import CallCenter from "../../components/CallCenter";
import DownloadApp from "../../components/DownloadApp";
import FondRegister from "../../components/FondRegister";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionCard from "../../components/SectionCard";
import SwiperComponent from "../../components/SwiperComponent";

// https://archive-science.vercel.app/
function Home() {
  return (
    <>
      <Navbar />
      <SwiperComponent />
      <Alphabet />
      <SectionCard />
      <FondRegister />
      <CallCenter />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default Home;
