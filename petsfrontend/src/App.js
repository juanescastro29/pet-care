import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewPets from "./pages/ViewPets";
import ViewAppointments from "./pages/ViewAppointments";
import RegistPet from "./pages/RegistPet";
import CreateAppointment from "./pages/CreateAppointment";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import {
  CREATEAPPOINTMENT,
  HOME,
  NOTFOUND,
  REGISTPET,
  VIEWAPPOINTMENTS,
  VIEWPETS,
} from "./routes/public";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={VIEWPETS} element={<ViewPets />} />
        <Route path={VIEWAPPOINTMENTS} element={<ViewAppointments />} />
        <Route path={REGISTPET} element={<RegistPet />} />
        <Route path={CREATEAPPOINTMENT} element={<CreateAppointment />} />
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
