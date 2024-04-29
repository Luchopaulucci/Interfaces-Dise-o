import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from "../pages/Index"
import EJ1P1 from "../pages/EJ1P1"

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
        path: '/ej1p1',
        element: <EJ1P1 />
      },
    ]
  },
])

export default router;