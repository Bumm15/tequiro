import { BrowserRouter, Route, Routes } from "react-router-dom";
import Strategies from "./pages/Strategies";
import ComunityStrategies from "./pages/ComunityStrategies";
import Brokers from "./pages/Brokers";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import { TopNavbar } from "./components/TopNavbar";
import { FooterWithLogo } from "./components/Footer";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Account/Login";
import RegisterPage from "./pages/Account/SignIn";

function App() {
  return (
    <main className=" bg-mainbg">


      <BrowserRouter>
        <div className={`mx-5 flex justify-between d gap-10 mb-10`}>


          {/*<div className=" h-96">
            <p className="text-primaryText">Reklama</p>
            
          </div>*/}
          <div className="container mx-auto">
            <TopNavbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/strategies" element={<Strategies />} />
              <Route path="/comunity-strategies" element={<ComunityStrategies />} />
              <Route path="/brokers" element={<Brokers />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/strategies/:stratid" element={<Strategies />} />
              <Route path="/account/log-in" element={<LoginPage />} />
              <Route path="/account/register" element={<RegisterPage />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>



          {/*<div className="bg-componentColor h-96">
            <p className="text-primaryText">Reklama</p>
  </div>*/}


        </div>
        <FooterWithLogo />
      </BrowserRouter>
    </main>
  );
}

export default App;
