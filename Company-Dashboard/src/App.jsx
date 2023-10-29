import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CompanyPassword from "./Company-Dashboard/password/CompanyPassword";
import PostInternship from "./Company-Dashboard/post-internship/PostInternship";
import CompanyDashboard from "./Company-Dashboard/dashboard/CompanyDashboard";
import CompanyProfile from "./Company-Dashboard/profile/CompanyProfile";
import CompanySidebar from "./components/sidebar/CompanySidebar";

function App() {
  return (
    <BrowserRouter>
      <CompanySidebar>
        <Routes>
          <Route path="/company-password" element={<CompanyPassword />} />
          <Route path="/post-internship" element={<PostInternship />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
        </Routes>
      </CompanySidebar>
    </BrowserRouter>
  );
}

export default App;
