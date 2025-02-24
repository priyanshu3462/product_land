
import "./App.css";
import { Home } from "./Pages/Home";
import { AppLayout } from "./components/layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { ErrorPage } from "./Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home />, 
      },
      {
        path:"about",
        element: <About  />, 
      },
      {
        path:"contact",
        element: <Contact />, 
      },
    ]
  },
 
 
]); 

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>
}

export default App;