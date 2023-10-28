import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <div className="max-w-5xl m-auto p-4">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
