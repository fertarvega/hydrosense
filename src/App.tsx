import { NavLink } from "react-router";
import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <NavLink to="/">Login again</NavLink>
    </MainLayout>
  );
}
