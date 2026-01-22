import { createBrowserRouter } from "react-router"
import Home from "../screen/Home"
import CreateNewUser from "../screen/CreateNewUser"

const AppRout = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path:'/CreateNewUser', element: <CreateNewUser/>},
    {path:'/edit/:id', element: <CreateNewUser/>}

])

export default AppRout
