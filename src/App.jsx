
import { createBrowserRouter, createRoutesFromElements, Route, NavLink, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import {Contact, contactDataLoader} from "./pages/Contact"
import {About, dataLoader} from "./pages/About"



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" loader={dataLoader} element={<About/>}></Route>
        <Route path="/contact" loader={contactDataLoader} element={<Contact/>}></Route>
      </Route>
    )
  )

  return (
    <div className="text-slate-50 container mx-auto">
      <RouterProvider router={router}/>
    </div>
  )
}

export function Root() {
  return (
    <>
      <div className="bg-slate-500 flex items-center gap-x-3 py-3 px-2 my-4 rounded">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
