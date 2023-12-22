import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CompanyPassword from "./Company-Dashboard/password/CompanyPassword";
import Internship from "./Company-Dashboard/internship/Internship";
import CompanyDashboard from "./Company-Dashboard/dashboard/CompanyDashboard";
import CompanyProfile from "./Company-Dashboard/profile/CompanyProfile";
import CompanySidebar from "./components/sidebar/CompanySidebar";
import Topbar from "./components/topbar/Topbar";
import PostInternship from "./components/postInternship/PostInternship";

function App() {
  return (
    <BrowserRouter>
      <CompanySidebar>
        <Topbar />
        <Routes>
          <Route path="/company-password" element={<CompanyPassword />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/post-internship" element={<PostInternship />} />
        </Routes>
      </CompanySidebar>
    </BrowserRouter>
  );
}

export default App;
