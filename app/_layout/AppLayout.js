import ProtectedRoute from "../_midlleware/ProtectedRoute";
import Navbar from "../_components/Template/Navbar";
import Container from "../_components/UI/Container";
import Footer from "../_components/Template/Footer";
import { ToastContainer } from "react-toastify";

const AppLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
      <ToastContainer />
    </ProtectedRoute>
  );
};

export default AppLayout;
