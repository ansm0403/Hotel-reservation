import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelListPage from "@pages/HotelList";
import TestPage from "@pages/Test";
import HotelPage from "@pages/Hotel";
import useLoadKakao from "@hook/useLoadKakao";
import SigninPage from "@pages/Signin";
import My from "@pages/My";
import AuthGuard from "./components/auth/AuthGuard";
import Navbar from "@shared/Navbar";

function App() {

  useLoadKakao()

  return (
    <BrowserRouter>
      <AuthGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<HotelListPage />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
          <Route path= "/my" element = {<My />} />
          <Route path="/signin" element = {<SigninPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App;
