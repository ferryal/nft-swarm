import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ConnectWallet } from "./pages/ConnectWallet";
import { CreateAccount } from "./pages/CreateAccount";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-primary">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect-wallet" element={<ConnectWallet />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
