import { useRoutes } from "react-router-dom"
import { Album } from "../pages/Album"
import { Fotos } from "../pages/Fotos"
import { Home } from "../pages/Home"

export const MainRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/album/:id', element: <Album /> },
    { path: '/photo/:id', element: <Fotos /> }
  ])
}
