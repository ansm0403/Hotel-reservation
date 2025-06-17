import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLoadKakao from "@hook/useLoadKakao";
import AuthGuard from "@components/auth/AuthGuard";
import Navbar from "@shared/Navbar";
import PrivateRoute from "./components/auth/PrivateRoute";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Navbar2 from "./components/shared/Navbar2";
import BookingPage from "./pages/BookingPage";
import ReservationPage from "./pages/Reservation";
import SignInPage from "./pages/SignInPage";
import { getAuth } from "firebase/auth";

const TestPage = lazy(() => import('@pages/Test'))
const HotelListPage = lazy(() => import('@pages/HotelList'))
const HotelPage = lazy(() => import('@pages/Hotel'))
const MyPage = lazy(() => import('@pages/My'))
const SigninPage = lazy(() => import('@pages/Signin'))
const SettingsPage = lazy(() => import('@pages/settings'))
const LikePage = lazy(() => import('@pages/settings/like'))
const LikeListPage = lazy(() => import('@pages/LikeList'))
const SchedulePage = lazy(() => import('@pages/Schedule'))
const ReservationDonePage = lazy(() => import('@pages/ReservationDone'))
const ReservationListPage = lazy(() => import('@pages/ReservationList'))
const SearchPage = lazy(() => import('@pages/Search'));
const PopularPage = lazy(() => import('@pages/PopularPage'));

function App() {

  useLoadKakao()

  return (
    <Suspense fallback = {<></>}>
      <HelmetProvider>
        <BrowserRouter>
          <AuthGuard>
              <Navbar2 />    
              <Routes>
                <Route path="/auth/signin" element = { <SignInPage /> } />
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/test2" element = {<PrivateRoute><HotelListPage /></PrivateRoute>} />
                <Route path="/hotel/:id" element={<PrivateRoute><HotelPage /></PrivateRoute>} />
                <Route path= "/my" element = {<PrivateRoute><MyPage /></PrivateRoute>} />
                <Route path="/signin" element = {<PrivateRoute><SigninPage /></PrivateRoute>} />
                <Route path="/settings" element = {<PrivateRoute><SettingsPage /></PrivateRoute>} />
                <Route path="/settings/like" element = {<PrivateRoute><LikePage/></PrivateRoute>} />
                <Route path="/search" element = {<PrivateRoute><SearchPage></SearchPage></PrivateRoute>} />
                <Route path="/like/list" element = {<PrivateRoute><LikeListPage /></PrivateRoute>} />
                <Route path="/schedule" element = {<PrivateRoute><SchedulePage/></PrivateRoute>} />
                <Route path="/booking" element = {<PrivateRoute><BookingPage /></PrivateRoute>} />
                <Route path="/reservation" element = {<PrivateRoute><ReservationPage /></PrivateRoute>} />
                <Route path="/reservation/list" element = {<PrivateRoute><ReservationListPage/></PrivateRoute>} />
                <Route path="/reservation/done" element = {<PrivateRoute><ReservationDonePage/></PrivateRoute>} />
                <Route path="/populars" element = {<PrivateRoute><PopularPage /></PrivateRoute>} />
                <Route path="/test" element={<PrivateRoute><TestPage /></PrivateRoute>} />
              </Routes>
          </AuthGuard>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  )
}

export default App;
