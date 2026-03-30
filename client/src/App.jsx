import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";


import AdminLogin from "./pages/admin/AdminLogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Routes */}
    
        <Route path="/login" element={<Login />} />
       

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
    

      </Routes>
    </BrowserRouter>
  );
}

export default App;