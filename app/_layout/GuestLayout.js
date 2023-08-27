import Navbar from "../_components/Template/Navbar";
import Container from "../_components/UI/Container";
import Footer from "../_components/Template/Footer";
import { ToastContainer } from "react-toastify";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <Container>{children}</Container>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default GuestLayout;
