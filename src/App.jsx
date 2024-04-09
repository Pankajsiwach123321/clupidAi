import "./App.css";
import Cupidai from "./components/Cupidai";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import TrustedCompany from "./components/TrustedCompany";

function App() {
  return (
    <>
      <div className=" bg-main">
        <Header />
        <TrustedCompany />
        <Cupidai />
        <Service />
      </div>
    </>
  );
}

export default App;
