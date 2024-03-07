import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Auth from "./pages/AuthConfig/AuthConfig.jsx";
import { setUserData, signOutUser } from "./features/Auth/authSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="Home" element={<Home />} />
      <Route path="/" element={<Auth />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  const { user } =
    useSelector((state) => state.auth);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken && !user) {
      // If authToken exists in localStorage and user is not logged in, fetch user data
      dispatch(setUserData({ userId: authToken, isAuth: true }));
    } else if (!authToken && user) {
      // If authToken doesn't exist in localStorage but user is logged in, sign out the user
      dispatch(signOutUser());
    
      
    }
  }, [dispatch, user]);

  return <RouterProvider router={router} />;
}

export default App;
