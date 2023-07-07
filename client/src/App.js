import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import DonePage from "./pages/DonePage";
import CardViewPage from "./pages/CardViewPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/homepage" element={ <HomePage /> } />
      <Route path="/AboutPage" element={ <AboutPage /> } />
      <Route path="/ContactPage" element={ <ContactPage /> } />
      <Route path="/regSuccessfull" element= {<DonePage />} /> 
      <Route path="/houseView" element= {<CardViewPage />} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
