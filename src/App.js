import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

import routes from "./Routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>;
      <Toaster />
    </>
  );
}

export default App;
