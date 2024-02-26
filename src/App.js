import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { BreadcrumbsDefault } from "./components/Breadcrumps";
import Strategies from "./pages/Strategies";
import LoginPage from "./pages/Account/Login";
import RegisterPage from "./pages/Account/SignIn";
import NotFound from "./pages/NotFound";
import AccountInfo from "./pages/Account/AccountInfo";
import { useAuth } from "./contexts/AuthContext";

export default function App() {

  const { user } = useAuth();

  return (
    <Layout>
      <div className="md:ml-5">
        <BreadcrumbsDefault />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strategies/:id" element={<Strategies />} />
          <Route path="/account" element={<AccountInfo />} />
          {!user && (
            <>
              <Route path="/account/login" element={<LoginPage />} />
              <Route path="/account/register" element={<RegisterPage />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  );
}