import { Outlet } from "react-router-dom";



export default function RootLayout() {
  return (
    <div className="Layout">
     
      

      <Outlet />
    </div>
  );
}
