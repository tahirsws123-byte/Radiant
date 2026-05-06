import Launguage from "../components/Home/Launguage";
import Pipeline from "../components/Home/Pipeline";
import Reach from "../components/Home/Reach";
import Sales from "../components/Home/Sales";
import Trust from "../components/Home/Trust";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Landing() {
  return (
    <>
      <Header />
      <Launguage />
      <div className="bg-linear-to-b from-white from-50% to-gray-100 py-12 sm:py-32">
        <Pipeline />
        <Sales />
      </div>
      <Reach />
      <Trust />
      <Footer />
    </>
  );
}

export default Landing;
