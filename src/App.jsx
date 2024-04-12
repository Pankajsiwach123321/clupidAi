import "./App.css";
import BackToTop from "./components/BacktoTop";
import Cupidai from "./components/Cupidai";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IdentityHub from "./components/IdentityHub";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import TrustedCompany from "./components/TrustedCompany";
import { usePreloader } from "./components/common/Hooks";

function App() {
  const isLoading = usePreloader();
  return (
    <>
      <div className="bg-main">
        <div className=" max-w-[1920px] mx-auto bg-main">
          {isLoading && <Preloader />}
          <BackToTop />
          <Header />
          <TrustedCompany />
          <Cupidai />
          <Service />
          <Pricing />
          <Faq />
          <div className=" overflow-hidden">
            <IdentityHub />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
