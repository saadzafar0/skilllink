import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BrowseJobs from "./pages/BrowseJobs";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import Proposals from "./pages/Proposals";
import ActiveJobs from "./pages/ActiveJobs";
import JobProposals from "./pages/JobProposals";
import OngoingJobs from "./pages/OngoingJobs";
import OngoingFreelancerJobs from "./pages/OngoingFreelancerJobs";
import Submissions from "./pages/Submissions";
import MakeSubmission from "./pages/MakeSubmission";
import Transactions from "./pages/Transactions";
import WithdrawFunds from "./pages/WithdrawFunds";
import BuyConnects from "./pages/BuyConnects";
import AddFunds from "./pages/AddFunds";
import Profile from "./pages/Profile";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import './App.css';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <>
          <div className="app-background">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/browse-jobs" element={<ProtectedRoute><BrowseJobs /></ProtectedRoute>} />
              <Route path="/jobDetails/:jobID" element={<ProtectedRoute><JobDetails /></ProtectedRoute>} />
              <Route path="/post-job" element={<ProtectedRoute><PostJob /></ProtectedRoute>} />
              <Route path="/proposals" element={<ProtectedRoute><Proposals /></ProtectedRoute>} />
              <Route path="/active-jobs" element={<ProtectedRoute><ActiveJobs /></ProtectedRoute>} />
              <Route path="/jobProposals/:jobId" element={<ProtectedRoute><JobProposals /></ProtectedRoute>} />
              <Route path="/ongoingJobs" element={<ProtectedRoute><OngoingJobs /></ProtectedRoute>} />
              <Route path="/ongoingFreelancerJobs" element={<ProtectedRoute><OngoingFreelancerJobs /></ProtectedRoute>} />
              <Route path="/submissions/:jobId" element={<ProtectedRoute><Submissions /></ProtectedRoute>} />
              <Route path="/make-submission/:jobId" element={<ProtectedRoute><MakeSubmission /></ProtectedRoute>} />
              <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
              <Route path="/submission/:jobId" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
              <Route path="/withdraw-funds" element={<ProtectedRoute><WithdrawFunds /></ProtectedRoute>} />
              <Route path="/buy-connects" element={<ProtectedRoute><BuyConnects /></ProtectedRoute>} />
              <Route path="/add-funds" element={<ProtectedRoute><AddFunds /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/messages" element={<ProtectedRoute><MessagesPage /></ProtectedRoute>} />
            </Routes>
            <Footer />
          </div>
        </>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
