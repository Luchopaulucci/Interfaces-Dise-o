import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from "../pages/Index"
import EJ1 from "../pages/EJ1"
import Punto1Ej1 from "../components/Punto1Ej1"
import Punto2Ej1 from './../components/Punto2Ej1';
import Punto3Ej1 from "../components/Punto3Ej1"
import Punto4Ej1 from './../components/Punto4Ej1';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/ejercicio1',
        element: <EJ1 />,
      },
          {
            path: '/punto1',
            element: <Punto1Ej1 />
          },
          {
            path: '/punto2',
            element: <Punto2Ej1 />
          },
          {
            path: '/punto3',
            element: <Punto3Ej1 />
          },
          {
            path: '/punto4',
            element: <Punto4Ej1 />
          },
      
    ]
  },
])

export default router;