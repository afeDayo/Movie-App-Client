import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Bookmark from "./pages/Bookmark/Bookmark";
import Error from "./pages/Error/Error";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast"; //step 33
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  // State Management Tools
  // context API*****
  // Redux
  // Zustand
  return (
    <>
      <Router>
        {/* step 16  to put the routes in a nested Authprovoder gotten from Authcontext.jsx*/}
        <Toaster position="top-right" /> {/*step 34 go to authcontext */}
        <AuthProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvseries" element={<TvSeries />} />
              <Route element={<PrivateRoute />}>
                {" "}
                {/*step 69 go back to styling .... go to pages folder and style the homepage */}
                <Route path="/bookmark" element={<Bookmark />} />
              </Route>
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
