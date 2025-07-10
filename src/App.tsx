import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthProvider";
import { ProtectedRoute } from "./components/ui/ProtectedRoute";
import { ROLES } from "./utils/constants";
import {
  HomePage,
  LoginPage,
  SignupPage,
  ContactPage,
  JobsPage,
  DashboardPage,
  FAQPage,
  NotFoundPage
} from "./pages"

function App() {
    return(
      <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>} />

                <Route path="/login" element={<LoginPage/>} />

                <Route path="/signup" element={<SignupPage/>} />

                <Route path="/contact" element={<ContactPage/>} />

                <Route path="/jobs" element={<JobsPage/>} />

                <Route path="/faq" element={<FAQPage/>} />
              <Route />

                    { /* Protected Routes */}
                    <Route element ={ <ProtectedRoute allowedRoles ={[ROLES.ADMIN, ROLES.EMPLOYER]} />}/>
                        <Route path="/dashboard" element={<DashboardPage/>} />
                    <Route />

                    <Route path ="*" element={<NotFoundPage/>} />
          </Routes>
          <ChatWidget />
        </BrowserRouter>
      </AuthProvider>
    )
}

export default App;