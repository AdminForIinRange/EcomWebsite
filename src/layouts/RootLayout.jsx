import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar.jsx';

export default function RootLayout() {
  return (
    <>
     
     <Navbar /> 
     
      <Outlet />

    </>
  );
}
