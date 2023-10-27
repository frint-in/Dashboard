import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppliedInternship from "./Student-Dashboard/applied-internship/AppliedInternship";
import StudentDashboard from "./Student-Dashboard/dashboard/StudentDashboard";
import StudentProfile from "./Student-Dashboard/profile/StudentProfile";
import StudentPassword from "./Student-Dashboard/password/StudentPassword";
import CompanyPassword from "./Company-Dashboard/password/CompanyPassword";
import PostInternship from "./Company-Dashboard/post-internship/PostInternship";
import CompanyDashboard from "./Company-Dashboard/dashboard/CompanyDashboard";
import CompanyProfile from "./Company-Dashboard/profile/CompanyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/applied-internship" element={<AppliedInternship />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/company-password" element={<CompanyPassword />} />
        <Route path="/post-internship" element={<PostInternship />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/student-password" element={<StudentPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
