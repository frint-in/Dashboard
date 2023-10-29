import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppliedInternship from "./Student-Dashboard/applied-internship/AppliedInternship";
import StudentDashboard from "./Student-Dashboard/dashboard/StudentDashboard";
import StudentProfile from "./Student-Dashboard/profile/StudentProfile";
import StudentPassword from "./Student-Dashboard/password/StudentPassword";
import StudentSidebar from "./components/sidebar/StudentSidebar";

function App() {
  return (
    <BrowserRouter>
      <StudentSidebar>
        <Routes>
          <Route path="/applied-internship" element={<AppliedInternship />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/student-password" element={<StudentPassword />} />
        </Routes>
      </StudentSidebar>
    </BrowserRouter>
  );
}

export default App;
