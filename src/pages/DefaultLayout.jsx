import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <main className="container">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}